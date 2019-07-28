const EventEmitter = require('events');
const readLine  = require('readline');

const r1 = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
const client = new EventEmitter();
const server = require('./server')(client);
server.on('response',(resp)=>{
    //console.log('Resp is '+ resp);
    // process.stdout.write('\u001B[2]\u001B[0;0f');
    //process.stdout.write(resp);
    // process.stdout.write('\n\>')
    console.log(resp);
    r1.prompt(false)
})
let command, args;

r1.on('line',(input)=>{
    // console.log(input);
    [command, ...args] = input.split(' ');
    client.emit('command',command, args)
})