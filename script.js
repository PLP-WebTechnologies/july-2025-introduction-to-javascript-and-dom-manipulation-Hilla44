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



function gatherData(webname, data){
    alert( "Welcome to "+ webname + " (HL) " +  data + "." );
}

(gatherData('Hillcid','health dataweb'));


// DOM - Document object Model
/* getElementById()
queryselector()
queryselectorALL()


 */
function ChangeText() {
    let btn = document.getElementById("btn");
    btn.style.display = "block";  // keeps button visible (optional)

    let title = document.getElementById("title");
    title.textContent = "HillCid Your health partner!";
    title.style.color = "green";

    // Adding an element
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Hit me up on www.hillcid.com';
    document.body.appendChild(newDiv);
}




  /*  function ChangeText(){
        let btn = document.getElementById("btn");
    
    btn.style.display = "block";  // or some valid display value


    // btn.style.display = "You clicked me!";
        let title = document.getElementById("title");
        title.textContent= "HillCid Your health partner!"
        title.style.color= "green"
        //adding an element
        let newDiv = document.createElement('div');
        newDiv.textContent = 'Hit me up on www.hillcid.com';
        document.body.appendChild(newDiv);
}
*/

// List of available services - you can update this dynamically if needed
const availableServices = [
  'Therapy Sessions',
  'Prescription Refill in Pharmacy',
  'Contact Occupational Therapist',
  'Engage with Physician'
];

// Function to display available services and interact
function checkServices() {
  const servicesDiv = document.getElementById('servicesList');
  const messageDiv = document.getElementById('serviceMessage');

  // Clear previous content
  servicesDiv.innerHTML = '';
  messageDiv.textContent = '';

  if (availableServices.length === 0) {
    messageDiv.textContent = 'No services are currently available.';
    messageDiv.style.color = 'red';
    return;
  }

  // Create a list of services
  const ul = document.createElement('ul');
  availableServices.forEach(service => {
    const li = document.createElement('li');

    // Create a button for each service
    const btn = document.createElement('button');
    btn.textContent = service;
    btn.onclick = () => {
      messageDiv.textContent = `You selected: ${service}. Please contact us for more info.`;
      messageDiv.style.color = 'green';
    };

    li.appendChild(btn);
    ul.appendChild(li);
  });

  servicesDiv.appendChild(ul);
}

// Define available services (array of strings)
const availableServices = [
  "Therapy Sessions",
  "Prescription Refill in Pharmacy",
  "Contact Occupational Therapist",
  "Engage with Physician"
];

// Function to check if user-requested service is available
function checkUserService() {
  // Capture input as a string
  let userInput = document.getElementById("userServiceInput").value;
  
  // Validate input type and trim whitespace
  if (typeof userInput !== "string" || userInput.trim() === "") {
    console.log("Please enter a valid service name.");
    document.getElementById("serviceMessage").textContent = "Please enter a valid service name.";
    return;
  }
  
  userInput = userInput.trim();
  console.log(`User requested service: '${userInput}'`);
  
  // Use if/else to check if service exists
  if (availableServices.includes(userInput)) {
    let message = `Yes! We offer the service: ${userInput}.`;
    console.log(message);
    document.getElementById("serviceMessage").textContent = message;
  } else {
    let message = `Sorry, the service '${userInput}' is not available right now.`;
    console.log(message);
    document.getElementById("serviceMessage").textContent = message;
  }
}
