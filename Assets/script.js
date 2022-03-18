// Assignment code here
var symbolOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var capitalOptions =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberOptions = [1,2,3,4,5,6,7,8,9,0]
//var lowerCaseOptions = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
//var lowerCase = toLowerCase(capitalOptions)
console.log(numberOptions)
var password = symbolOptions + capitalOptions + lowerCaseOptions + numberOptions



function generatePassword(password) {
  var symbols = window.prompt("Do you want symbols?")
  if (symbols === "yes"|| "YES") {
    return symbolOptions
  } else if (symbols === "no" || symbols === "NO") {
    return symbolOptions = ""
} else {window.prompt("Enter YES or NO") };


  var capital = window.prompt("Do you want UPPERCASE letters?")
  if (capital === "yes" || "YES") {
    return capitalOptions
  } else if (symbols === "no" || symbols === "NO") {
    return capitalOptions = ""
  } else { window.prompt("Enter YES or NO") };


  var lowerCase = window.prompt("Do you want symbols?")
  if (lowerCase === "yes"|| "YES") {
    return lowerCaseOptions
  } else if (lowerCase === "no" || symbols === "NO") {
    return lowerCaseOptions = ""
} else {window.prompt("Enter YES or NO") };

var numbers = window.prompt("Do you want symbols?")
if (symbols === "yes"|| "YES") {
  return numberOptions
} else if (numbers === "no" || numbers === "NO") {
  return numberOptions = ""
} else {window.prompt("Enter YES or NO") };



var passwordLength = window.prompt ("How many charcters do you want your password? Please enter a number between 10 and 30?") 
  if (passwordLength >= 10 && passwordLength >= 30){
  return passwordLength
  } else {
    window.prompt("Please enter a number between 10 and 30!")
  }

for ( var i = 0 ; i< passwordLength; i++) {

  


  return password;

}


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


