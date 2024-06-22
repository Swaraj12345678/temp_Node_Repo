const EventEmitter = require('events'); // returns class

// instance of class
const emitter = new EventEmitter();

// 2 imp method 
// on - listen for an event
// emit = emit an event

emitter.on('response', (name, id) => {  // response is an event name or identifier!
    console.log(`Data received ${name} and ${id}`);
});
emitter.on('response', () => {      // can be listen
    console.log("some other logic");
})

emitter.emit('response', 'swaraj', '19');