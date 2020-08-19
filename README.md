# telegram-message-bot
Send messages to channels.
## Installation
$ npm install telegram-message-bot
## Usage
Load module.
```javascript
const TelegramMessageBot = require('telegram-message-bot')
```
Initialize with your bot token.
```javascript
let messageBot = new TelegramMessageBot('TELEGRAM_BOT_TOKEN')
```
Send message.
```javascript
messageBot.send('@ChannelName', 'Message to be sent').then(result => {}).catch(error => {})
```
Enjoy!

