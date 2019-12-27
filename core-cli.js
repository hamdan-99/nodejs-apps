#!/usr/bin/env node
const {caesarize}= require('./core');
const {add, subtract, divide, multiply} =require('./calc');

const OPERATIONS = {
  "+": add,
  "-": subtract,
  "/": divide,
  "*": multiply,
  "~": caesarize
};

function usage() {
    console.log('Usage : core');
    console.log('Usage : add');
    console.log('Usage : subtract');
    console.log('Usage : divide');
    console.log('Usage : multiply');
    console.log('Usage : caesarize');
}
console.log(process.argv);
if (process.argv.length !== 5) {
  usage();
  process.exit(1);
}
let value1 = process.argv[2];
const op = process.argv[3];
let value2 = process.argv[4];
if (op !== `~`) {
  value1 = parseFloat(value1);
  value2 = parseFloat(value2);
  if (isNaN(value1) || isNaN(value2)) {
    usage();
    process.exit(1);
  }
}

if (!Object.keys(OPERATIONS).includes(op)) {
  usage();
  process.exit(1);
}
let opFn = OPERATIONS[op];
let result = opFn(value1, value2);

console.log("result:", result);
