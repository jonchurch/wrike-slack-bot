'use strict';

require('dotenv').config()

const Config = {
	SLACK_TOKEN: process.env.SLACK_TOKEN,
	WRIKE_ACCESS_TOKEN: process.env.WRIKE_ACCESS_TOKEN,
	WRIKE_REFRESH_TOKEN: process.env.WRIKE_REFRESH_TOKEN,
	WRIKE_CLIENT_ID: process.env.WRIKE_CLIENT_ID,
	WRIKE_CLIENT_SECRET: process.env.WRIKE_CLIENT_SECRET
}



module.exports = Config
