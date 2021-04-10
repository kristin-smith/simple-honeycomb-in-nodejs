
const EventEmitter = require('events'); //class notation with its own methods
const emitter = new EventEmitter(); //object, instance of class EventEmitter
const log = require('./logger')

//Register a listener
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg)
});

emitter.on('sendLog', (arg) => {
    log(arg.data)
});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});
//needs a previously defined listener for anything to happen

// Raise the logging event (data: message)
emitter.emit('sendLog', { data: 'message'});
