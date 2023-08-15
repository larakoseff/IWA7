const nickname = "Timmy";
const firstname = "Timothy";
const user = nickname || firstname 
const message = nickname || firstname 

if (!user)  {
    console.log ('Good Morning!')
}


console.log(`Good morning ${message}!`)

    
// const nickname= "Timmy";
// const firstname = "Timothy";

// console.log("Good Morning, ${nickname} || {firstname}!")

// Code did not behave as expedted because interpolation did not have backticks and was therefore functioning as one string