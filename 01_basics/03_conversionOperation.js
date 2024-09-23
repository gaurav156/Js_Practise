let score = "33";

// console.log(score);
// console.log(typeof score);

let numberType = Number(score);

// console.log(numberType);
// console.log(typeof numberType);

// let numberType1 = Number("22x"); // NaN - Not a Number
// let numberType1 = Number(null); // 0
let numberType1 = Number(undefined); // NaN - Not a Number

// console.log(numberType1);
// console.log(typeof numberType1);

let stringType = String(43);

// console.log(stringType);
// console.log(typeof stringType);

let boolType = Boolean(0);

// console.log(boolType);
// console.log(typeof boolType);

/*
1 => true; 0 => false
"" => false
"hitesh" => true
*/

// *********************** Operations ***********************

let num = 3
// console.log(-num);
// console.log(-true); // -1
// console.log(- + ""); // -0, tries to conevert it from Boolean
// console.log(- + "a"); //NaN

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2 raise to power of 2
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log((3 + 4) * 5 % 3);

// console.log(+true); // +1
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
console.log(++gameCounter);
gameCounter = 100
console.log(gameCounter++);

