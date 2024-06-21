// async file system

const { readFile, writeFile, read } = require("fs");
console.log("start");
// callback
readFile("./folder/first.txt", "utf8", (err, result) => {
  // utf8 is decoding technique!
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;
  readFile("./folder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./folder/result-async.txt",
      `Here is the result ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result); // undefined
        console.log("Done with this task!");
      }
    );
  });
});

console.log("Starting a new one !!!");

// output ->>
/*start
Starting a new one !!!            // this line prints before completing on going task
Done with this task!
*/ // it is a advantage of using async!

// async approach can be with call back as shown above
// alternatives are using promises , asyn-await ->> will be show ahead
// async await is mostly used!
