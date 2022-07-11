# 登入系統
## 簡介
這是一個簡易的登入系統，可辨別使用者的帳號及密碼是否正確。
## 功能

・使用者可在主頁面輸入帳號及密碼。

・使用者若輸入正確的帳號密碼，則可登入個人頁面。

・使用者若輸入錯誤的帳號密碼，則無法登入個人頁面，且系統會提示帳號或密碼有誤。

## 安裝 
1. 使用終端機 Clone 此專案至本機電腦
```
git clone https://github.com/PigeonShogi/URL_Shortener.git
```

2. 使用終端機進入存放此專案的資料夾
```
cd Login
```

3. 安裝 nodemon
```
npm install -g nodemon
```

4. 建立 package.json 檔
```
npm init -y
```

5. 利用 npm 安裝所需套件
```
npm i express@4.16.4
npm i express-handlebars@3.0.0

```
6. 以 nodemon 開啟 app.js
```
npm run dev

```

7. 輸入帳號密碼，輸入正確即可登入。

## 開發工具
* Node.js 14.16.0
* Express 4.18.1
* Express-Handlebars 6.0.6
* Bootstrap 5.2.0
* body-parser 1.20.0