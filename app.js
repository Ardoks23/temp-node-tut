// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npn i <packageName>

// global dependency - use it in any project
// npm install - g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i lodash - String , array , number to make work easier
// npm i bootstrap - to make css styling easier


// .gitignore 
// git init
// git add .
// git commit -m "First Commit"

// Github to folder
// CMD cd desktop
// git clone git@github.com

// npm i nodemon -D ** Install Dev dependencies
// for scripts package.json "start"  "start:" "node app.js"
// for watching JS___ "dev" : nodemon app.js start
// npm run dev -- 


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log("Hello world")