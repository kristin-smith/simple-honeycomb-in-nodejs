
var url = 'http://mylogger.io/log';

function log(message) {
    //send an http request to the url
    console.log(message)
}

module.exports.log = log //entire object;
module.exports = log; //just the function