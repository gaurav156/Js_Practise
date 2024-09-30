let date = new Date()

console.log(date) // 2024-09-28T06:37:41.588Z

console.log(date.toString()); // Mon Sep 30 2024 21:09:17 GMT+0530 (India Standard Time)
console.log(date.toDateString()); // Mon Sep 30 2024
console.log(date.toLocaleString()); // 30/9/2024, 9:08:50 pm


let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate)

let currentTimeStamp = Date.now() // ms passed since 1970
console.log(currentTimeStamp); // 1727710804040

let mytDate = new Date(2024, 5, 15, 10, 30) // year / month - 1 / date / hr / sec / ms
console.log(mytDate) // 15 June 2024 10:30

let myCurrentDate = new Date("2023-01-14")
console.log(myCurrentDate);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long", 
}));

