const WrikeService = require('../services/WrikeService')

class TaskHandler {

    getAll(bot, msg) {
    	console.log('I CAN TOTALLY HANDLE THIS!')
        WrikeService.getAllTasks().then(function(result) {
        	console.log('PROMISES COME TRUE')
            let arr = []
            for (let i = 0; i < result.data.length; i += 1) {
                arr.push('Title: ' + result.data[i].title)
                arr.push('Status: ' + result.data[i].status)
                arr.push('Importance: ' + result.data[i].importance)
                arr.push('Created: ' + result.data[i].created)
                arr.push('Due: ' + result.data[i].dates.due)
            }
            const tasks = arr.join('\n\n')
            console.log('TASKS=',tasks)
            
            bot.reply(msg, tasks)    
        })

    }

}


module.exports = TaskHandler
