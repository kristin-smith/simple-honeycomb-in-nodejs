
const EventEmitter = require('events'); //parent class

var url = 'http://mylogger.io/logs'

class Logger extends EventEmitter {
    log(message){
        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
        console.log(`Sending message: ${message}`);

        //Raise another  event
        this.emit('sendLog', { data: 'message'});
    }
}

module.exports = Logger;