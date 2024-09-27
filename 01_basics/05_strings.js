const firstName = "Gaurav"
const lastName = new String("Shukla")

console.log(`Hi, my name is ${firstName} and my surname is ${lastName}`) // use this approach

const myName = "Gaurav_Shukla"
const myName2 = 'Gaurav_Shukla'
console.log(myName.charAt(3));
console.log(myName.indexOf("_"));
console.log(myName2.indexOf('_')); // "" or '' are same
console.log(myName.substring(0, 6)); // start index, end index + 1
console.log(myName.slice(0, 6)); // start index, end index + 1
console.log(myName.length) // length is not a function
console.log(myName.includes("_"))

const newName = myName.replace("_", "-"); // does not change original array
console.log(newName)
console.log(myName)

const gameName = "        Valorant            "
console.log(gameName.trim());
console.log(gameName.trimStart());
console.log(gameName.trimEnd());
console.log(newName.split("-"))