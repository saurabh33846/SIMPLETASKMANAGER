const EventEmitter = require('events');
class Server extends EventEmitter{
    constructor(client){
        process.nextTick(()=>{
            this.emit('response','Type a command (help to list command');
        })
        super();
        client.on('command', (command, args)=>{
            console.log(`Command is ${command}`);
            //help, add, ls, delete
            switch(command){
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[command](args);
                    break;
                default:
                this.emit('response', 'Unknown command...');
            }
        })
    }
    help(){
        this.emit('response', 'Available commands are: add task\n ls\n delete: id\n');
    }
    add(args){
        this.emit('response', args.join(' '));
    }
    ls(){
        this.emit('response', 'ls  ...');
    }
    delete(){
        this.emit('response', 'delete  ...');
    }
}
module.exports =(client) => new Server(client);
