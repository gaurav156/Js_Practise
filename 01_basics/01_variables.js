const accountId = 134672    // constant cant not be changed later
let accountEmail = "gaurav@google.com"  // variable - can be changed
var accountPassword = "hbehb";  // should not be used - bcos of JS scope issue 
accountCity = "Mumbai"  // not a good practise
let accountState;

// accountId = 3 // cannot change constant variablles
// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])