const WrikeService = require('../services/WrikeService')

class TaskHandler {

    getAll(bot, msg) {
        WrikeService.getAllTasks().then(function(result) {
            let arr = []
            console.log('ATTN', result)
            for (let i = 0; i < result.data.length; i += 1) {
                arr.push('Title: ' + result.data[i].title)
                arr.push('Status: ' + result.data[i].status)
                arr.push('Importance: ' + result.data[i].importance)
                arr.push('Created: ' + result.data[i].created)
                arr.push('Due: ' + result.data[i].dates.due)
            }
            const tasks = arr.join('\n\n')
            console.log('TASKS=',tasks)
            console.log(tasks)
            bot.reply(msg, tasks)    
        })

    }
    getActiveByUser(bot, msg, id){
    	console.log('HANDLER HEARD GET ACTIVE')
    	WrikeService.getActiveByUser(id).then(function(tasks){
    		console.log('ACTIVE TASKS=',tasks)
    	})
    }

}


module.exports = TaskHandler
