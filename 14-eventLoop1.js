// Event Loop in Nodejs - 

/*The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. */

/*
How the Event Loop Works
Initialization:----
When a Node.js application starts, it initializes the event loop, processes any input scripts, and executes any functions that are called.

Event Loop Phases:------------
The event loop runs through multiple phases in a loop. Each phase has a specific purpose and handles different types of callbacks. The primary phases include:
Timers: Executes callbacks scheduled by setTimeout() and setInterval().
Pending Callbacks: Executes I/O callbacks deferred to the next loop iteration.
Idle, Prepare: Internal use only.
Poll: Retrieves new I/O events; executes I/O-related callbacks (almost all I/O callbacks except for timers and setImmediate).
Check: Executes callbacks scheduled by setImmediate().
Close Callbacks: Executes close event callbacks (e.g., socket.on('close', ...)).

Offloading to the System Kernel:------
Many asynchronous operations in Node.js, like file system operations, are executed by the system kernel. The kernel is optimized to handle these operations efficiently. When such an operation is initiated, Node.js registers a callback and offloads the task to the kernel.
The kernel notifies Node.js once the operation is complete, placing the callback in the appropriate phase of the event loop for execution.
*/

// event loop example - 
const { readFile } = require('fs');
console.log('started a first task');
// CHECK FILE PATH!!!!
readFile('./folder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
});
console.log('starting next task');
// output -
// started a first task
// starting next task
// this is first.txt        // callbacks are handled at last! thats event loop! Basically we "offloaded" the task
// completed first task

