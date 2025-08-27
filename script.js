// variables
//declaring variables
//1. let keyword
//let VariableName - value;

const birthyear = 2001
console.log('I was born in that ' + birthyear)

// Arithmetic (mathematical) operators
console.log(10+50);
console.log(10/500);
console.log(10* 50)
console.log(20%6) //modulus

//comparison operators
console.log(5=='5'); // loose comparison
console.log(5==='5'); // not true(strict- comparing both the value and datatype)

// Functions needs a block of code
/*
functionality{}{
   statements
   Having a arepetitive task 
}
*/
function greet(){
    console.log('Hello world. This message is through a function')
}

greet();

// method no 2 IN USING FUNCTIONS; STORING A FUNCTION INSIDE A VARIABLE

const hello = function(){
    console.log('Hi there!This is a message using a function expression ')
}

hello();

//3. arrow function

const goodbye = ()=>console.log('Goodbye from an arrow function');

goodbye();

// parameters and return values

function multiply(a,b,c){
    return a * b * c;
}
console.log(multiply(2,3,10));
console.log(multiply(4,2,9));
console.log(multiply(4,3,9));
console.log(multiply(4,7,9));
console.log(multiply(4,3,9));

function gatherData(name, age, state, country){
    alert( "My name is "+ name + " I am " + age + " years old and I am from " + state + " in " + country + "." );
}

(gatherData('Hillary Kore','24','Nairobi','Kenya'));


// DOM - Document object Model
/* getElementById()
queryselector()
queryselectorALL()
 */
function ChangeText(){
    let btn = document.getElementById("btn");
   // btn.textContent = "You clicked me!";
   btn.style.display = "block";  // or some valid display value


   // btn.style.display = "You clicked me!";
    let title = document.getElementById("title");
    title.textContent= "Hello Web Module 5 Assignment!"
    title.style.color= "red"
    //adding an element
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Hey I was never here before and after creating document';
    document.body.appendChild(newDiv);
}
