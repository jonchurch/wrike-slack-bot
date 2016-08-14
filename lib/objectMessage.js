'use strict'

class Message {
  constructor(msg) {
    this.channel = msg.channel
    this.from = msg.user
    this.text = msg.text
    // this.user = msg.user
  }

  static mapMessage(msg) {
    return {
      channel: msg.channel,
      from: msg.from,
      text: msg.text || null,
      // user: {
      //   firstName: msg.from.first_name,
      //   lastName: msg.from.last_name
      // }
    }
  }
}

module.exports = Message
