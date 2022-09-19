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

//NAMING CONVENTIONS
//myAnniversary ==camelCase
//my_anniversary//snake case  //Edan will judge me
//HOURS_TO_DRIVE_TO-DULUTH===my uncle posting to facebook===screaming snake case
//my-anniversary===kabob case BREAKS JS
//<button class="delete-btn">Delete me</button>

//                  curly braces in variable means not a variable and instead an object
let anniversaryDate={
    //key:value
    //also called properties and values
    month:'June',
    date:'16',
    year:'2011',
    location:{
        state: 'MN',
        city: 'Albany',
        //access bottom=== anniversaryDate.location.counties[1]
        counties:[
            'top',
            'bottom'    
        ]
    },
    attendees:[
        {name:'John',
        wearing:['nothing']},
        {name: 'sarah'}
    ]
};

//keep all data types in mind


myAnniversary=`Your anniversary is on
We are in variable interpolation:
${anniversaryDate.month} ${day}, ${year}.`
;


console.log(myAnniversary);

let person={
    name: 'John',
    relationship: 'friend',
    age: 24,
    wearing: ['shirt', 'hat', 'pants'],
};

//input: person
//output:boolean
function canTheyDrink(human){
if(human.age>=21){return true};
return false
};

let canJohnDrink=canTheyDrink(person);
console.log(canJohnDrink);

//annie without variable
let canAnnieDrink=canTheyDrink({
    name: 'annie',
    age: 8
});
console.log('can annie drink?', canAnnieDrink);

//lesson, you can make new object for the parameter of the function and that will serve as the parameter for 'human'
