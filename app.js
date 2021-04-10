
const os = require('os');
var totalMem = os.totalmem();
var hostname = os.hostname();

//Template string

console.log(`Total Memory: ${totalMem}`);
console.log(`Hostname: ${hostname}`);
