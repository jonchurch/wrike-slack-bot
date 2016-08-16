'use strict';

(function(module) {
    const Promise = require('bluebird')
    const config = require('../config')
    const request = require('request-promise-native')
    let AccessToken = null

    refreshCredentials()
    
    module.getAllTasks = getAllTasks
    module.getAllContacts = getAllContacts
    module.getActiveByUser = getActiveByUser
    module.getAllByUser = getAllByUser

    /**
     * Retrieve all tasks from wrike api
     * @return {array} Array of all tasks
     */
    function getAllTasks() {
        const options = {

            uri: 'https://www.wrike.com/api/v3/tasks',
            headers: {
                'Authorization': 'bearer ' + AccessToken
            },
            json: true
        }

       return request(options)
    }

    function getActiveByUser(id){
        console.log(id)
       const options = {

            uri: 'https://www.wrike.com/api/v3/accounts/' + id + '/tasks',
            headers: {
                'Authorization': 'bearer ' + AccessToken
            },
            qs: {
                status: 'Active'
            },
            json: true
        }

       return request(options)
    }

    function getAllByUser(id) {
        const options = {

            uri: 'https://www.wrike.com/api/v3/accounts/' + id + '/tasks',
            headers: {
                'Authorization': 'bearer ' + AccessToken
            },
            json: true
        }

       return request(options)


    }
    function getAllContacts(){
        const options = {
            uri: 'https://www.wrike.com/api/v3/contacts',
            headers: {
                'Authorization': 'bearer ' + AccessToken
            },
            json: true
        }

        return request(options)

    }

    function toggleTaskStatus(taskId) {

    }

    function updateTask(taskObject) {
    }

    function refreshCredentials() {
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
        request.post(options).then(function(result) {
                console.log('Token Refreshed')
                AccessToken = result.access_token
            })
    }
})(exports);
