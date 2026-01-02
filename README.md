# 火花行動 SparkAct — 公司官網（React + Vite）

以 React + Vite 建置的單頁靜態網站，包含服務介紹、關於我們、聯絡資訊等區塊，並可自動部署至 GitHub Pages。

## 內容
- 服務項目：上雲、快速網站、AI 自動化、系統整合、DevOps、資料工程
- 公司資訊：火花行動有限公司｜Email: info@sparkact.co｜統編：60407020｜地址：桃園市中壢區環北路400號17樓之6

## 本機開發
```sh
npm install
npm run dev
```

## 建置
```sh
npm run build
npm run preview
```

## 部署到 GitHub Pages（自動）
1. 將此資料夾初始化為 Git 並推到 GitHub：
```sh
git init
git add .
git commit -m "init: sparkact site"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<你的repo>.git
git push -u origin main
```
2. 進入 GitHub 專案的 Settings → Pages，Source 選擇 "Deploy from a branch" 並確認分支為 `gh-pages`（第一次 workflow 執行後會自動建立）。
3. 每次推到 `main`，GitHub Actions 會自動建置並發布 `dist` 到 `gh-pages`。

> 註：Workflow 會自動將 Vite `base` 設為 `/<repo-name>/`。若你將來使用自訂網域，可將 workflow 的 `BASE_PATH` 改為 `/`。

## 手動部署（可選）
已提供 `gh-pages` 套件，可本機打包並推送 `dist`：
```sh
npm run deploy
```
請確認已設定遠端 `origin` 並擁有推送權限。

## 結構
- `src/App.jsx`：各區塊元件（Hero/Services/About/Contact/Footer）
- `src/styles.css`：全站樣式
- `vite.config.js`：支援以 `BASE_PATH` 注入 GitHub Pages base
- `.github/workflows/deploy.yml`：自動部署流程

## 自訂
- 服務內容、敘述與文案：編輯 `src/App.jsx`
- 視覺主題：調整 `src/styles.css` 中的 CSS 變數與樣式
- base 路徑：修改 workflow 的 `BASE_PATH` 或本機設定環境變數

---
© 火花行動有限公司 SparkAct Co., Ltd.
