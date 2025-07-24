// ==UserScript==
// @name         ESJ Zone 一键下载全书 [最终版]
// @namespace    https://github.com/yourname/esj-dl
// @version      2.0
// @description  在 ESJ Zone 小说目录页插入“下载全书”按钮，沿用网站原样式，纯前端打包 txt
// @author       you
// @match        https://www.esjzone.cc/detail/*
// @match        https://www.esjzone.one/detail/*
// @match        https://www.esjzone.net/detail/*
// @match        https://www.esjzone.me/detail/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
  'use strict';

  /* ---------- 工具 ---------- */
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const $ = sel => document.querySelector(sel);

  function stripHtml(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }

  async function fetchChapter(url) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'GET',
        url,
        headers: { 'Cache-Control': 'no-cache' },
        onload(r) {
          try {
            const html = r.responseText;
            const title = html.split('<h2>')[1].split('</h2>')[0].trim();
            const part = html.split('forum-content mt-3')[1].split('single-post-meta')[0];
            const body = stripHtml(part.slice(9, -12)).trim();
            resolve({ title, body });
          } catch (e) { reject(e); }
        },
        onerror: reject
      });
    });
  }

  function download(name, text) {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name.replace(/[\\/:*?"<>|]/g, '') + '.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  }

  /* ---------- 主逻辑 ---------- */
  async function start(btn) {
    btn.disabled = true;
    btn.textContent = '准备中…';

    // 等章节列表真正出现
    while (!$('#chapterList')) await sleep(500);

    const links = [...$('#chapterList').querySelectorAll('a[href*="/forum/"]')]
      .map(a => a.href)
      .filter(h => /\/forum\/\d+\/\d+\.html/.test(h));

    if (!links.length) {
      alert('未找到章节'); btn.disabled = false; btn.textContent = '下载全书'; return;
    }

    const novelTitle = $('h2').textContent.trim().replace(/[\\/:*?"<>|]/g, '');
    let fullText = '';
    for (let i = 0; i < links.length; i++) {
      btn.textContent = `下载中 ${i + 1}/${links.length}`;
      try {
        const { title, body } = await fetchChapter(links[i]);
        fullText += `\n\n${title}\n${body}\n`;
      } catch {
        fullText += `\n\n【章节 ${i + 1} 获取失败】\n`;
      }
      await sleep(300);
    }
    download(novelTitle, fullText);
    btn.textContent = '下载完成';
  }

  /* ---------- 插入按钮 ---------- */
  function insertBtn() {
    if ($('#esj-dl-btn')) return;
    const header = $('.chapter-list-header') || $('#chapterList')?.parentElement;
    if (!header) return;

    const btn = document.createElement('button');
    btn.id = 'esj-dl-btn';
    btn.className = 'btn btn-primary';
    btn.textContent = '下载全书';
    btn.style.margin = '0 0 15px 20px';
    btn.onclick = () => start(btn);
    header.prepend(btn);
  }

  // 监听页面动态变化
  new MutationObserver(insertBtn)
    .observe(document.body, { childList: true, subtree: true });
})();