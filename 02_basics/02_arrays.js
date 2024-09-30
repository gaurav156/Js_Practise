const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // adds element at last position

console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); // flash

marvel_heros.pop()

const allHeros = marvel_heros.concat(dc_heros) // merges 2 arrays
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // another way using spread operator

console.log(all_new_heros);


let testString = "Gaurav" // either string or array -> error - number is not iterable
let spreadOp = [...testString] // incase of string  - converts it into an array of character

console.log(spreadOp); // [ 'G', 'a', 'u', 'r', 'a', 'v' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // depth can be set
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")) // wheter an array?
console.log(Array.from("Hitesh")) // converts into array of characters [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting -> empty array bcos cannot split
console.log(Array.from(123)) // empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]