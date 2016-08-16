const WrikeService = require('../services/WrikeService')

class CasualHandlers {

	getAllContacts(bot, msg) {
		WrikeService.getAllContacts().then(function(result) {
            console.log('ALL CONTACTS=', result)
        }).catch(function(err) {
            console.log('REQUEST ERROR=', err)
        })
	}

}

module.exports = CasualHandlers
