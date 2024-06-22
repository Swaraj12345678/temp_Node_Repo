// EventEmitter is a core module in Node.js that provides a way to handle events and event-driven programming. It allows objects (such as servers, files, and streams) to emit events and listeners to handle those events asynchronously.

// eg1 - Example with Arguments
/*
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register an event listener with arguments
emitter.on('response', (name, age) => {
    console.log(`Data received successfully. Name: ${name}, Age: ${age}`);
});

// Emit the 'response' event with arguments
emitter.emit('response', 'John', 30);
*/
// eg2 - Example with Multiple Listeners
/*
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register multiple listeners for 'response' event
emitter.on('response', () => {
    console.log('First listener triggered.');
});

emitter.on('response', () => {
    console.log('Second listener triggered.');
});

// Emit the 'response' event
emitter.emit('response');
*/
/* summary - 
EventEmitter: The class used to handle events in Node.js.
.on(eventName, listener): Adds a listener for the specified event.
.emit(eventName, [...args]): Emits the specified event with optional arguments.
.off(eventName, listener): Removes a listener from the specified event (use removeListener in older versions of Node.js).
*/


const EventEmitter = require('events'); // returns class
// instance of class
const emitter = new EventEmitter();

// 2 imp method 
// on - listen for an event
// emit = emit an event

emitter.on('response', (name, id) => {  // response is an event name or identifier!
    console.log(`Data received user ${name} with id - ${id}`);
});
emitter.on('response', () => {      // can be listen
    console.log("some other logic");
})

emitter.emit('response', 'swaraj', '19');
//Data received user swaraj with id - 19
// some other logic