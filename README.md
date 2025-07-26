# ESJ Zone 一键下载全书 – 用户指南

本项目脚本**完全由 KimiAI 自动生成**，思路与目录结构参考了 [ZALin/ESJZone-novel-mirror](https://github.com/ZALin/ESJZone-novel-mirror) 项目，在此致谢！

---

## 一、准备工作

1. 给浏览器安装 **篡改猴（Tampermonkey）**  
   - Chrome / Edge 用户：  
     [Chrome 网上应用店 - Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   - Firefox 用户：  
     [Firefox Add-ons - Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)

2. 安装完成后，浏览器右上角会出现 Tampermonkey 图标 <img width="50" height="50" alt="image" src="https://github.com/user-attachments/assets/cba97bf8-e600-477e-ac9f-33d097b2b902" />
。

3. 安卓edge浏览器同理。

---

## 二、安装脚本

### 方式 A（推荐，一键导入）
1. 确保安装篡改猴后进入本仓库 [Releases](../../releases) 页面。
2. 点击最新版本 `ESJ.Zone.user.js`。
3. Tampermonkey 会弹出安装提示 → 点击 **安装** 即可。
### 方式 B（压缩包导入）
1. 确保安装篡改猴后进入本仓库 [Releases](../../releases) 页面。
2. 下载最新版本 `tampermonkey_scripts.zip`。
3. 解压得到 `ESJ Zone 一键下载全书 [最终版].user.js`。
4. 双击或拖拽该 `.user.js` 文件到浏览器窗口，Tampermonkey 会弹出安装提示 → 点击 **安装** 即可。
5. 安卓edge浏览器用户安装篡改猴后进入本仓库 [Releases](../../releases) 页面，下载zip文件  
   **edge浏览器右下角三横杠** 点开 → 点击 **扩展功能** → 打开 **篡改猴** → **＋新建脚本** → 右上角 **导入导出工具** → **导入** 选择档案 → 选择下载的 **zip文件** → 导入。

### 方式 C（手动复制）
1. 打开 Tampermonkey 面板 → **添加新脚本**。
2. 删除默认代码，将 [ESJ Zone 一键下载全书 [最终版].user.js](ESJ%20Zone%20一键下载全书%20[最终版].user.js) 的完整内容粘贴进去。
3. `Ctrl+S` 保存。
4. 安卓edge浏览器同理。

---

## 三、开始使用

1. 进入任意 ESJ Zone 小说目录页，例如：  
   `https://www.esjzone.cc/detail/123456.html`
2. 等待页面加载完毕，章节列表上方会出现 **“下载全书”** 按钮。  
   按钮示例：(<img width="423" height="278" alt="image" src="https://github.com/user-attachments/assets/f0d1767f-0814-4a2b-ab4d-f61d1ae49260" />
)
3. 点击按钮，脚本会依次抓取所有章节内容，打包为 **UTF-8 纯文本 txt** 并自动下载到本地，排版保持esj原文章排版<br>（由于代码结构问题，章节较多时下载会很缓慢，我不知道怎么解决、、）。

---

## 四、常见问题

| 问题 | 解决方法 |
|---|---|
| 按钮不出现 | 刷新页面或检查 Tampermonkey 是否已启用脚本|
| 下载中断 | 检查网络，再次点击按钮可断点续传（已下载内容不会重复） |
| 章节乱码 | 确保浏览器和系统字体支持繁体中文 |
---
*另外，Edge 138+ / Tampermonkey 5.3+ 以后，必须同时满足下面两步，脚本才会真正注入执行：

1·打开 Edge 的“开发者模式”
地址栏输入 edge://extensions/ → 右上角把 “开发者模式” 开关拨到 开 → 重启浏览器。

2·（某些版本还会显示）“允许用户脚本”
仍在 edge://extensions/ 页面，找到 Tampermonkey → 详细信息 → 打开 “允许用户脚本” 开关 → 再重启一次浏览器即可。

完成这两步后，刷新小说目录页，蓝色「下载全书」按钮就会正常出现，脚本也能顺利运行。

*以上内容大部分为 **KimiAI** 生成，再由我润色增改部分内容。

## 五、许可证

MIT © KimiAI & Contributors
