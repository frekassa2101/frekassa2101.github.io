/**
 * Depending on whether you have "use strict" or not, the result may be:

undefined (no strict mode)
An error (strict mode)
When a property of str is accessed, a “wrapper object” is created.
In strict mode, writing into it is an error.
Otherwise, the operation with the property is carried on, 
the object gets the test property, but after that the “wrapper object” disappears, 
so in the last line str has no trace of the property
 */
let str = "Hello";

str.test = 5; // (*)

console.log(str.test);
/**
 * • Sum numbers from the visitor
*/
const prompt = require("prompt-sync")();
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

console.log(a + b);
//******** *
const prompt = require("prompt-sync")();
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

console.log(`Read: ${readNumber()}`);
//********** *
("use strict");
/* global readNumber assert */
describe("readNumber", function () {
  it("234 read and  , returns it 234", function () {
    assert.equal(readNumber(234), 234);
  });

  it("123 read and ,returns  it 123", function () {
    assert.equal(readNumber(123), 123);
  });
  it("if cancel,returns null", function () {
    assert.equal(readNumber());
  });
});
/*The given inpute i */
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log(i);
}
//**** *
function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
//*** *
function randomInteger(min, max) {
  // now rand is from  (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

console.log(randomInteger(1, 3));
//**** *
("use strict");
/* global randomMaxMin assert */
describe("randomMaxMin", function () {
  it("3 is the max of 2,3", function () {
    assert.equal(randomMaxMin(2, 3), 3);
  });

  it("4 is the max of 3,4", function () {
    assert.equal(randomMaxMin(3, 4), 4);
  });
});
/**upper case of a given string  */
function ucFirst(str) {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));
/**  Test of upper case of a given string  */
describe("ucFirst", function () {
  it("Uppercases the first symbol", function () {
    assert.strictEqual(ucFirst("john"), "John");
  });

  it("Doesn't die on an empty string", function () {
    assert.strictEqual(ucFirst(""), "");
  });
});
/*checking agive string by given part of text*/
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return (
    lowerStr.includes("viagra") ||
    lowerStr.includes("xxx") ||
    lowerStr.includes("rabbit")
  );
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
console.log(checkSpam("adonik"));
/*test of checkSpam of agiven function*/
describe("checkSpam", function () {
  it('finds spam in "buy ViAgRA now"', function () {
    assert.isTrue(checkSpam("buy ViAgRA now"));
  });

  it('finds spam in "free xxxxx"', function () {
    assert.isTrue(checkSpam("free xxxxx"));
  });

  it('no spam in "innocent rabbit"', function () {
    assert.isFalse(checkSpam("innocent rabbit"));
  });
});
/*Truncate atext*/
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}
console.log(truncate("hi every one", 6));
/*Truncate Test*/
describe("truncate", function () {
  it("truncate the long string to the given length (including the ellipsis)", function () {
    assert.equal(
      truncate("What I'd like to tell on this topic is:", 20),
      "What I'd like to te…"
    );
  });

  it("doesn't change short strings", function () {
    assert.equal(truncate("Hi everyone!", 6), "Hi everyone!");
  });
});
/*extractCurrencyValue*/
function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log(extractCurrencyValue("$120") === 120);
/*extractCurrencyValueTest */
describe("extractCurrencyValue", function () {
  it("for the string $120 returns the number 120", function () {
    assert.strictEqual(extractCurrencyValue("$120"), 120);
  });
});
/*get max subarray*/
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3]));
/*get maxsubarray test of agiven code*/
describe("getMaxSubSum", function () {
  it("maximal subsum of [1, 2, 3] equals 6", function () {
    assert.equal(getMaxSubSum([1, 2, 3]), 6);
  });

  it("maximal subsum of [-1, 2, 3, -9] equals 5", function () {
    assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
  });

  it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function () {
    assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
  });

  it("maximal subsum of [-2, -1, 1, 2] equals 3", function () {
    assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
  });

  it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function () {
    assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });

  it("maximal subsum of [] equals 0", function () {
    assert.equal(getMaxSubSum([]), 0);
  });

  it("maximal subsum of [-1] equals 0", function () {
    assert.equal(getMaxSubSum([-1]), 0);
  });

  it("maximal subsum of [-1, -2] equals 0", function () {
    assert.equal(getMaxSubSum([-1, -2]), 0);
  });

  it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function () {
    assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
  });
});
