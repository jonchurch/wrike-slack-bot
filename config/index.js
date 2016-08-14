'use strict';

require('dotenv').config()

const Config = {
	SLACK_TOKEN: process.env.SLACK_TOKEN,
	WRIKE_ACCESS_TOKEN: process.env.WRIKE_ACCESS_TOKEN
}



module.exports = Config
