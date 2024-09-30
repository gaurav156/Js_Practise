let mixedArray = [1, 2, "3", true]

console.log(mixedArray);
console.log(typeof mixedArray[2]);

// Array methods

let newArray = new Array(1) 
newArray[0] = "yo" // else it will be empty => [ <1 empty item>, 1, '2' ]
newArray.push(1)
newArray.push("2")

newArray.push(true)
newArray.pop() // removes the last element - here, "true"
console.log(newArray); // [ 'yo', 1, '2' ]

newArray.unshift(9) // shifts the array from left to right and adds the value on left most i.e 0th index
newArray.shift() // shifts the array from right to left and remove the value from left

console.log(newArray);

console.log(newArray.includes(9));
console.log(newArray.indexOf(3)); // -1 if doesnt exists

const newArr = newArray.join() // returns string
console.log(newArr); // yo,1,2

const newArr2 = newArray.join("|")
console.log(newArr2); // yo|1|2
 
// slice, splice

console.log(newArray.slice(0, 2)); // start, end + 1 (end is excluded) => [ 'yo', 1 ] - doesnt modifies the original array

let spliceArray = newArray.splice(0, 2) // it splits array in 2 and modifies the original array as well
console.log(spliceArray); // [ 'yo', 1 ]
console.log(newArray); // [ '2' ]

