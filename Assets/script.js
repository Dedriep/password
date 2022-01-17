// Assignment code here
var value = Math.floor(Math.random()* 20 + 6);

console.log(value + 10)


function generatePassword (password){
  var symbols = window.prompt("Do you want symbols?") 
    if (symbols === "yes" || symbols === "YES") { 
        if (value === 2) { var symbols = "&"}
        else if (value === 4) { var symbols = "!"}
        else if (value === 6) { var symbols = "@"}
        else if (value === 8) { var symbols = "#"}
        else if  (value === 10) { var symbols = "$"}
        else if (value === 12) { var symbols = "%"}
        else if (value === 14) { var symbols = "^"}
        else if (value === 16) { var symbols = "*"}
        else if (value === 18) { var symbols = "("}
        else if ( value === 20) { var symbol = ")"}
        else {var symbols = "?"}


    } else if (symbols === "no" || symbols === "NO") {
        var symbols = "" || null;
  
        return password;
    } else {window.prompt("Enter YES or NO")};
  

    var capitalLetters = window.prompt ("Do you want UPPERCASE letters?") 
      

    var smallLetters = window.prompt ("Do you want lowercase letters?")

    var numbers = window.prompt ("Do you want numbers?")

    password = symbol + capitalLetter + smallLetters + numbers

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


