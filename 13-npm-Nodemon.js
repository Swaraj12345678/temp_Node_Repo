// npm - global command, comes with node
// npm --version //10.7.0

// local dependencies - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any package
// npm install -g <packageName>

// package.json - manifest file (stores important info about the project/ packages)
// manual approach  (create package.jsonin the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// for example purpose we installed lodash and bootstrap packages
const _ = require('lodash');

// just to experiment -
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);  // [ 1, 2, 3, 4 ]
console.log("Hello There!!");

// package.json file plays crucial role while sharing our code in github
// while sharing on github we don't push node modules as they are very big in size!
// there dependencies can be used if some clones our project !!


// I created a git repo pushed all the code except node modules
/*
PS C:\NodeTut> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodetut)
version: (1.0.0)
description:
entry point: (1-intro.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\NodeTut\package.json:

{
  "name": "nodetut",
  "version": "1.0.0",
  "main": "1-intro.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}


Is this OK? (yes) yes

PS C:\NodeTut> npm init -y
Wrote to C:\NodeTut\package.json:

{
  "name": "nodetut",
  "version": "1.0.0",
  "main": "1-intro.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}



PS C:\NodeTut> npm i lodash

added 1 package, and audited 2 packages in 5s

found 0 vulnerabilities
PS C:\NodeTut>  npm i bootstrap

added 2 packages, and audited 4 packages in 5s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\NodeTut> node app
[ 1, 2, 3, 4 ]
PS C:\NodeTut>
 *  History restored

PS C:\NodeTut>
 *  History restored

PS C:\NodeTut> git init
Initialized empty Git repository in C:/NodeTut/.git/
PS C:\NodeTut> git add .
warning: in the working copy of 'folder/result-sync.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
PS C:\NodeTut> git commit -m "First Commit"
[master (root-commit) d584bcc] First Commit
 21 files changed, 316 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 1-intro.js
 create mode 100644 10-fs-sync.js
 create mode 100644 11-fs-async.js
 create mode 100644 12-http.js
 create mode 100644 2-Globals.js
 create mode 100644 3-modules.js
 create mode 100644 4-names.js
 create mode 100644 5-utils.js
 create mode 100644 6-altenative-flavors.js
 create mode 100644 7-mind-grenade.js
 create mode 100644 8-os-module.js
 create mode 100644 9-path-module.js
 create mode 100644 app.js
 create mode 100644 folder/first.txt
 create mode 100644 folder/result-async.txt
 create mode 100644 folder/result-sync.txt
 create mode 100644 folder/second.txt
 create mode 100644 folder/subfolder/test.txt
 create mode 100644 package-lock.json
 create mode 100644 package.json
PS C:\NodeTut> git remote add origin https://github.com/Swaraj12345678/temp_Node_Repo.git
>> git branch -M main
>> git push -u origin main
Enumerating objects: 25, done.
Counting objects: 100% (25/25), done.
Delta compression using up to 8 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (25/25), 5.20 KiB | 532.00 KiB/s, done.
Total 25 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Swaraj12345678/temp_Node_Repo.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
*/

// ------------------------------------------------------------------------------------------------------------------

// then I cloned the repo in my system in diff folder
/*
PS C:\Users\Mtronics Computers> cd C:\Temp
PS C:\Temp> git clone https://github.com/Swaraj12345678/temp_Node_Repo.git
Cloning into 'temp_Node_Repo'...
remote: Enumerating objects: 25, done.
remote: Counting objects: 100% (25/25), done.
remote: Compressing objects: 100% (20/20), done.
remote: Total 25 (delta 0), reused 25 (delta 0), pack-reused 0
Receiving objects: 100% (25/25), 5.20 KiB | 2.60 MiB/s, done.
*/

// ------------------------------------------------------------------------------------------------------------------

// then I just have to run npm install in that folder's terminal !!! then all the dependencies that have been used in cloned repo project will be installed ! Easy right???


//nodemon package*****
// install it as a devDependencies - npm i nodemon -D       // locally
//coz nodemon is basically used during development and not in production

// to check whether the nodemon is globally installed or not run nodemon app.js
// this will give command not found that means its not installed globally*
// to installnodemon globally - npm i -g nodemon