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

**CommonJS (default in Node.js):**

```js
// Answer here..
CommonJS syntax uses require to import modules
const fs = require("fs");
```

**ES Modules (supported in modern Node.js):**

```js
// Answer here..
ES Module syntax uses import syntax to import functions from files
import {useState} from "react";
```
