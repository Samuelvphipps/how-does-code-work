console.log('in script.js');

//Declaration
let myAnniversary;

//Assignment
myAnniversary="May 8, 2021";  //camel case capitalizes each word besides the first
// let variable =declaration:::: variable="_"=assignment



//Variables saves information to a box/computer for future access
//This runs and logs x and evaluates the variable myAnniversary (may 8 2021)
//console.log('When was my anniversary?', myAnniversary);

//Expressions===bit of code to be evaluated

let month='May';
let day='8';
let year='2011';
//              BACKTICKS ALLOW TEMPLATE LITERALS AND MULTILINE STRINGS
myAnniversary=`Your anniversary is on
We are in variable interpolation:
${month} ${day}, ${year}.`
;

console.log(myAnniversary);
//NAMING CONVENTIONS
//myAnniversary ==camelCase
//my_anniversary//snake case  //Edan will judge me
//HOURS_TO_DRIVE_TO-DULUTH===my uncle posting to facebook===screaming snake case
//my-anniversary===kabob case BREAKS JS
//<button class="delete-btn">Delete me</button>
