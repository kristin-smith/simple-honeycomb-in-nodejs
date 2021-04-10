
console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {
    //send an http request to the url
    console.log(message)
}

module.exports.log = log; //entire object;
exports.log = log; //also valid object export
module.exports = log; //just the function
