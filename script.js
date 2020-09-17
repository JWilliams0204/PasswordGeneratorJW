// javascript function to create the action//
function writePassword() {  

var characterEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&?" ;

var Passwordlength = 8;
var password = "";

// for loop that executes the javascript code //
  for(var i=0; i<Passwordlength; i++){

var  randomChars = Math.floor(Math.random() * characterEl.length);
  password += characterEl.substring(randomChars,randomChars+1);

  } 
  document.getElementById("password").value = password;
} 


// Add event listener to generate button

document.getElementById("generate").addEventListener("click", writePassword);
