# Node.js Fundamentals

## What is Node.js?

Answer here..
Node.js is javascript engine to run javascript on terminal or command line.

## How does Node.js differ from running JavaScript in the browser?

Answer here..
Since Node.js works on the terminal or command line it has access to users operating system, env variable, files and other resoures which javascript running in browser does not have as it is running in a sandbox and prevented from accessing any resources for security measures.

## What is the V8 engine, and how does Node use it?

Answer here..
V8 engine is engine that reads javascript and turns into fast machine readable instructions the computer can run. Google built V8 engine to run javascript inside the browser and Node took the same engine to run javascript and wrapped around with abilities like file and network access.

## What are some key use cases for Node.js?

Answer here..
Chat api, servers, web api's, command line tools etc

## Explain the difference between CommonJS and ES Modules. Give a code example of each.

Browser side Javascript and React uses ES Modules syntax to import modules, where as
Server side Javascript run with Node uses Common JS syntax to import modules.
They essentially represent syntax difference in two environments for importing modules.
They also differ in syntax in the way they export functions.
CommonJS uses module.exports with a list of functions.
ES Modules uses keyord export followed by function name to export the
function to be shared with other parts of the program.

**CommonJS (default in Node.js):**

```js
// Answer here..
CommonJS syntax uses keyword require to import modules or functions.
const fs = require("fs"); //imports the module fs into the code

Common JS syntax for exporting modules..
module.exports = {fs} //exports module fs to be shared across the code..
```

**ES Modules (supported in modern Node.js):**

```js
// Answer here..
ES Module syntax uses keyword import syntax to import modules or functions from files
import {useState} from "react";//imports useState from react package.

export useState; //exports useState from React package to be used by other programs.
```
