const assert = require('assert');
const {caesarize}= require('./core');
const {add, subtract, divide, multiply} =require('./calc');
const OPERATIONS = {add, subtract, divide, multiply,caesarize};

describe('calc',()=>{
    describe('add',()=>{
        it('can add two numbers',()=>{
            assert.equal(add(5, 3), 8);
            assert.equal(add(-100,-100), -200);
            assert.equal(add(-5, 3), -2);
        });
        it('has floating point numbers',()=>{
            assert.equal(add(0.1, 0.2), 0.30000000000000004);
        }); 
    });
    describe('subtract',()=>{
        it('can subtract tow numbers',()=>{
            assert.equal(subtract(1, -1), 2);
        });
    });
    describe('divide',()=>{
        it('can divide tow numbers',()=>{
            assert.equal(divide(1, -1), -1);
            assert.equal(divide(0.1, 0.2), 0.5);
            assert.equal(divide(24, 4), 6);
        });
    });
    describe('multiply',()=>{
        it('can multiply tow numbers',()=>{
            assert.equal(multiply(1, -1), -1);
            assert.equal(multiply(24, 4), 96);
        });
        it('has floating point numbers',()=>{
            assert.equal(multiply(0.1, 0.2), 0.020000000000000004);
        });
    });
});

describe('caesarsCipher', (strToCaesarize, shiftNumber) => {
    it('Characters should move followed by ShiftNumber', () => {
      assert.equal(caesarize('aBcD', 3), 'dEfG');
      assert.equal(caesarize('aBcD', -3), 'xYzA');
      assert.equal(caesarize('heLLo worLd!', 0), 'heLLo worLd!');
      assert.equal(caesarize('heLLo worLd!', 1), 'ifMMp xpsMe!');
      assert.equal(caesarize(' ', 5), ' ');
      assert.equal(caesarize('mnOpQr', 26), 'mnOpQr');
      assert.equal(caesarize('#@&&^F*(#', 6), '#@&&^L*(#');
    });
  });
  