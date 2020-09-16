// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var capitalLetters= ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
var lowercaseLetters= ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var numbers=["0,1,2,3,4,5,6,7,8,9"];
var symbols=["!,@,#,$,%,&,?"];
var Passwordlength = 8
var password = ""

var capitalEl= document.getElementById("capitalLetters");
var lowercaseEl= document.getElementById("lowercaseLetters");
var numberEl= document.getElementById("numbers");
var symbolEl= document.getElementById("symbols");
var generateEl= document.getElementById("generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function pwd(length.capitalLetters){
  var password = "";

  for(var i= 0; i<Passwordlength; i++){

    password += capitalLetters.capitalEl(Math.floor(math.random()*25);
  }
  return password;
}


function pwd(length.lowercaseLetters){
var password = "";

for(var i= 0; i<Passwordlength; i++){

  password += lowercaseLetters.lowercaseEl(Math.floor(math.random()*25);
}
return password;


}


function pwd(length.numbers){
var password = "";

for(var i= 0; i<Passwordlength; i++){

  password += numbers.numberEl(Math.floor(math.random()*10);
}
return password;

}


function pwd(length.symbols){


  for(var i= 0; i<Passwordlength; i++){

    password += symbols.symbolEl(Math.floor(math.random()*7);
  }
  return password;

}
Submit.addEventListener("click", function(){

  var capitalEl= capitalLetters;

}

