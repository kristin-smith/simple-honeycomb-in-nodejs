
const EventEmitter = require('events'); //class notation with its own methods

const Logger = require('./logger')
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg)
});

logger.on('sendLog', (arg) => {
    console.log('log sent')
});

logger.log('message')
