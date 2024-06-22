// Streams in Node.js are an abstract interface for working with streaming data. They provide a way to handle reading or writing files, network communications, or any kind of end-to-end information exchange in an efficient manner. Streams are particularly useful for handling large amounts of data, as they allow you to process data piece by piece without having to load everything into memory at once.
// Stream extends EventEmitter class 

// *Types of Streams* --->
/*
Readable Streams: Streams from which data can be read (e.g., fs.createReadStream for reading files).
Writable Streams: Streams to which data can be written (e.g., fs.createWriteStream for writing to files).
Duplex Streams: Streams that are both readable and writable (e.g., TCP sockets).
Transform Streams: Duplex streams where the output is computed based on the input (e.g., zlib.createGzip for compressing data).
*/

// Stream Methods and Events-- >
/*
Readable Streams
Methods:
readable.read([size]): Reads data from the stream.
readable.pipe(destination[, options]): Pipes the readable stream to a writable stream.
readable.unpipe([destination]): Unpipes the stream from the destination.
Events:
data: Fired when there is data available to read.
end: Fired when no more data is available.
error: Fired when there is an error with the stream.
close: Fired when the stream and any of its underlying resources have been closed.

Writable Streams
Methods:-
writable.write(chunk[, encoding][, callback]): Writes data to the stream.
writable.end([chunk][, encoding][, callback]): Signals that no more data will be written to the stream.
Events:-
drain: Fired when it is appropriate to resume writing data to the stream.
finish: Fired when all data has been flushed to the underlying system.
error: Fired when there is an error with the stream.
close: Fired when the stream and any of its underlying resources have been closed.

Duplex and Transform Streams
These streams implement both the readable and writable stream interfaces, and they have methods and events from both.
*/
