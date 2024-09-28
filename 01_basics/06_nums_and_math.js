const score = 400

const balance = new Number(400)

console.log(score) // 100
console.log(balance) // [Number: 100]

console.log(balance == score) // true
console.log(balance === score) // false

console.log(balance.toFixed(2)); // 400.00
console.log(198923.32221095.toFixed(2)); // rounds off -> 198923.32

console.log(123.8966.toPrecision(3)); // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


//-----------Math-----------------------

console.log(Math.floor(123.89)); // 123
console.log(Math.ceil(123.01)); // 124
console.log(Math.max(1, 8 , 9 , 10)); // 10
console.log(Math.min(1.1, 1.2, 1.0, 8 , 9 , 10)); // 1 i.e 1.0
console.log(Math.abs(-0.004)); // 0.004 ->  makes number +ve

console.log(Math.random()) //  any number between 0 to 1 eg. 0.2649645886203942

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1) + min))); // formula to generate random number in a specific range

const rand = Math.random();
console.log(rand);
console.log((rand * 10) + 1);
console.log(Math.floor(rand * 10) + 1);

