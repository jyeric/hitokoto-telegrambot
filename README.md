# hitokoto-telegrambot
Telegram中的hitokoto bot

## 使用方式1:polling
### 准备工作
1. 有一个http bot token，申请参见：https://t.me/BotFather
2. 有一台可以连接telegram.org的电脑
3. 电脑中正确配置好nodejs
nodejs下载地址：  
Windows: https://npm.taobao.org/mirrors/node/v10.15.3/node-v10.15.3-x64.msi  
Linux: 建议使用[nvm](https://github.com/nvm-sh/nvm)  
### 安装
新建一个项目文件夹`mkdir bot`，`npm init -y` 然后安装依赖`npm i node-telegram-bot-api`  
然后你只需要把文件中的index.js下载  
对文件中的`const token = '填入你的token';` 中添上你的http bot token，例如：`const token = '111111111111:11111111111111111111';`  
配置后执行`node index.js`即可  
(若无法正常工作请查看https://segmentfault.com/a/1190000018716076 文章)
### 不想让程序占用命令行
安装`npm i pm2 -g`
运行`pm2 start index.js --name bot`
停止bot方式：`pm2 stop bot`
## 使用方式2:webhook
教程待补充
