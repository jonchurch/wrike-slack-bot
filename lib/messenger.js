'use strict'

const Botkit = require('botkit')
const slackBot = Botkit.slackbot({ debug: false })
const config = require('../config')
const Message = require('./objectMessage')
const handlers = require('../handlers')
    // const store = require('../store')
const Promise = require('bluebird')
const InputParser = require('./inputParser')
const logger = require('../utils/logger')
const inputParser = new InputParser()

/**
 * ## Messenger
 * inteface for bot APIs
 */
class Messenger {
    constructor() {
        this.bot = Botkit.slackbot({ debug: false })
        this.bot.spawn({ token: config.SLACK_TOKEN }).startRTM()
    }

    listen() {
        this.bot.on('ambient', this.handleText.bind(this))

        return Promise.resolve()
    }

    // handleVoice(msg) {
    //   return Promise.resolve()
    //     .then(getFile.bind(this))
    //     .then(getFileLink.bind(this))
    //     .then(voiceParser.parse)
    //     .then((resp) => {
    //       msg.text = resp
    //       this.handleText(msg)
    //     })

    //   function getFile() {
    //     return this.bot.getFile(msg.voice.file_id)
    //   }

    //   function getFileLink(resp) {
    //     return this.bot.getFileLink(resp.file_id)
    //   }
    // }

    handleText(bot, msg) {
        const message = new Message(Message.mapMessage(msg))
        const text = message.text

        logger.info('message received: ' + message.text)
       
        bot.reply(msg, "Time is an illusion. Lunchtime doubly so")
    }
}

module.exports = Messenger
