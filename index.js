const {get} = require('https');

class TelegramMessageBot {
    constructor(apiKey) {
	if (apiKey == undefined) {
	    throw new Error('You need token to access API.')
	}
	this.apiKey = apiKey
    }
}

TelegramMessageBot.prototype.send = (chatId, text) => {
    return new Promise((resolve, reject) => {
	if (chatId == undefined) reject(new Error('Missing identifier for the target chat or username of the target channel.'))
	if (text == undefined || text.length < 1) reject(new Error('Empty message to be sent.'))
	if (text.length > 4096) reject(new Error('Message exceeds character limit.'))
	get('https://api.telegram.org/bot${this.apiKey}/sendMessage?chat_id=${chatId}&text=${text}', callback => {
	    let response = ''
	    callback.on('error', error => reject(error))
	    callback.on('data', chunk => response += chunk)
	    callback.on('end', () => resolve(JSON.parse(response)))
	})
    })
}

module.exports = TelegramMessageBot
