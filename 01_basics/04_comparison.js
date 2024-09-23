// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); // converts to a number
console.log("02" > 1);

console.log(null > 0); // for > or < comparions null is considered as 0
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0); // always false for undefined
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); // stritch comparison, checks data type as well.
console.log("2" == 2); // true