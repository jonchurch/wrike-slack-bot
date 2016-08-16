'use strict';

(function(module) {
    const Promise = require('bluebird')
    const config = require('../config')
    const request = require('request-promise-native')
    module.getAllTasks = getAllTasks
    const AccessToken = {}

    refreshCredentials()

    /**
     * Retrieve all tasks from wrike api
     * @return {array} Array of all tasks
     */
    function getAllTasks() {
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

        return request(options).then(function(result){
            console.log('ALL TASKS',result)
        }).catch(function(err){
            console.log('REQUEST ERROR=',err)
        })
    }
    function refreshCredentials(refresh_token){
        const options = {
            uri: 'https://www.wrike.com/oauth2/token',
            qs: {
                client_id: config.WRIKE_CLIENT_ID,
                client_secret: config.WRIKE_CLIENT_SECRET,
                grant_type: 'refresh_token',
                refresh_token: config.WRIKE_REFRESH_TOKEN
            },
            json: true
        }
        return request.post(options).then(function(result){
            console.log(result)
        })
        /*.then(function(result){
            console.log('RESULT',result).catch(function(err){
                console.log(err)
            })
        })*/

    }

    function getUsersTasks(uid) {

    }

    function toggleStatus(taskId) {

    }

    function updateTask(taskObject) {

    }
})(exports);
