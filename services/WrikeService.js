'use strict';

(function(module) {
    const Promise = require('bluebird')
    const config = require('../config')
    const request = require('request-promise-native')
    module.getAllTasks = getAllTasks

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

        let tasks
        return request(options).catch(function(err){
            console.log('REQUEST ERROR=',err)
        })
    }
    function refreshCredentials(refresh_token){}

    function getUsersTasks(uid) {

    }

    function toggleStatus(taskId) {

    }

    function updateTask(taskObject) {

    }
})(exports);
