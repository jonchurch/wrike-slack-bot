'use strict';

(function(module) {
    const Promise = require('bluebird')
    const config = require('../config')
    const request = require('request-promise-native')
    module.getTasks = getTasks

/**
 * Retrieve all tasks from wrike api
 * @return {array} Array of all tasks
 */
    function getTasks() {
        const options = {

            uri: 'https://www.wrike.com/api/v3/tasks',
            // qs: {
            //     access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx' 
            // },
            headers: {
                'Authorization': 'bearer ' + config.WRIKE_ACCESS_TOKEN
            },
            json: true // Automatically parses the JSON string in the response 
        }
        let tasks
   return request(options)
            /*.then(function(result) {
            	tasks = result
                return tasks
            })
            .catch(function(err) {
                // API call failed... 
                console.log(err)
            })*/

    }
})(exports);
