//sumObject
/* eslint-disable id-length */
"use strict";
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); // 390
//multiple number
/* eslint-disable */
("use strict");
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
//multiplayerTest
describe("multiplyNumeric", function () {
  it("multiplies all numeric properties by 2", function () {
    let menu = {
      width: 200,
      height: 300,
      title: "My menu",
    };
    let result = multiplyNumeric(menu);
    assert.equal(menu.width, 400);
    assert.equal(menu.height, 600);
    assert.equal(menu.title, "My menu");
  });

  it("returns nothing", function () {
    assert.isUndefined(multiplyNumeric({}));
  });
});
//hello object
/* eslint-disable */
("use strict");
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user.surname);
console.log(user.name);
//check empasis
/* eslint-disable */
("use strict");
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
//check emphsastest
/* eslint-disable */
("use strict");
describe("isEmpty", function () {
  it("returns true for an empty object", function () {
    assert.isTrue(isEmpty({}));
  });

  it("returns false if a property exists", function () {
    assert.isFalse(
      isEmpty({
        anything: false,
      })
    );
  });
});
//calculator
/*eslint-disable*/
let calculator = {
  read: function () {
    this.value1 = parseFloat(prompt("enter value1?"));
    this.value2 = parseFloat(prompt("enter value1?"));
  },
  sum: function () {
    let x = this.value1 + this.value2;
    return x;
  },
  multiply: function () {
    let y = this.value1 * this.value2;
    return y;
  },
};
//calculator test
/*eslint-disable*/
("use strict");
/* eslint-disable*/
/* global calculator,sum,multiply assert,sum(),calculator.sum,calculator.multiply*/

describe("the sum is?", function () {
  calculator.value1 = 2;
  calculator.value1 = 3;
  calculator.sum = 5;

  it("5", function () {
    assert.equal(5, calculator.sum);
  });
});

describe("the multiplication is?", function () {
  calculator.value1 = 2;
  calculator.value1 = 3;
  calculator.multiply = 6;

  it("6", function () {
    assert.equal(6, calculator.multiply);
  });
});
//accomulator and test accomulator
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
//test accomulator
describe("Accumulator", function () {
  beforeEach(function () {
    sinon.stub(window, "prompt");
  });

  afterEach(function () {
    prompt.restore();
  });

  it("initial value is the argument of the constructor", function () {
    let accumulator = new Accumulator(1);

    assert.equal(accumulator.value, 1);
  });

  it("after reading 0, the value is 1", function () {
    let accumulator = new Accumulator(1);
    prompt.returns("0");
    accumulator.read();
    assert.equal(accumulator.value, 1);
  });

  it("after reading 1, the value is 2", function () {
    let accumulator = new Accumulator(1);
    prompt.returns("1");
    accumulator.read();
    assert.equal(accumulator.value, 2);
  });
});
