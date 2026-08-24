# 第 1 課 AI 書櫃

這是可直接部署的靜態網站版本。開啟 `index.html` 即可使用。

## 已完成

- 第 1 課 AI 書櫃首頁
- 三份公開授課計畫表的網站閱讀頁
- 原始 Word 檔直接下載
- 入口網站返回連結與教材分類介面

## 新增教材方式

1. 將原始檔放入 `assets/documents/`。
2. 若為 Word 文件，更新 `tools/generate_reader_pages.py` 中的 `FILES`，再以 Python 執行該程式產出 `read/` 閱讀頁。
3. 在 `assets/app.js` 的 `resources` 新增一筆資料，填入教材名稱、類別、閱讀頁與下載檔案路徑。

正式部署時，將整個 `ai-bookshelf-site` 資料夾上傳至網站主機，入口網站的「查看書櫃」連結改至此資料夾的 `index.html`。
