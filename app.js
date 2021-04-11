
require("honeycomb-beeline")({
    // Get this via https://ui.honeycomb.io/account after signing up for Honeycomb
    writeKey: "13e407bd57ef0ef0284c958e08cafcad",
    // The name of your app is a good choice to start with
    dataset: "first-node-app-dataset",
    serviceName: "first-node-app"
});

const beeline = require("honeycomb-beeline")();
console.log(beeline)
const trace = beeline.startTrace()

const http = require("http");
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        const responseSpan = beeline.startSpan();
        res.write('Hello Honeycomb!');
        res.end();
        beeline.addTraceContext({
            response: 'Hello honeycomb!'
        })
        beeline.finishSpan(responseSpan);
    }
});

const serverSpan = beeline.startSpan();
server.on('connection', (socket) =>{
    console.log('new connection...')
})
beeline.addTraceContext({
    step: 'starting server'
})
server.listen(3000);
beeline.finishSpan(serverSpan);

console.log('Listening on port 3000');
beeline.finishTrace(trace);




