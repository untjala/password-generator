// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();
  var possible = "";

  // Sets password length parameters 
  var input = parseInt(prompt("Choose a length between 8 and 128."));
  if (input >= 8 && input <= 128) {
    //Returns invalid character length message 
  } else {
    alert("Please enter a length between 8 and 128.");
  }


  // Checks for lowercase letters
  var useLowercase = confirm("Would you like to use lowercase letters?");
  if (useLowercase) {
    possible += lowercase
  }
  //Checks for uppercase lettters
  var useUppercase = confirm("Would you like to use uppercase letters?");
  if (useUppercase) {
    possible += uppercase
  }
  //Checks for special characters
  var useSpecial = confirm("Would you like to use special characters?");
  if (useSpecial) {
    possible += special
    possible += special
  }
  //Checks for numbers
  var useNumbers = confirm("Would you like to use numbers?");
  if (useNumbers) {
    possible += numbers
    possible += numbers
  } else {
    alert("Please use select one of the choices.");
  }
  //PROBLEM AREA
  //OUTPUTING "your secure password"
  var passwordBuilt = "";
  console.log(possible);
  for (var i = 0; i < input; i++) {
    passwordBuilt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return passwordBuilt;
  //stopping after lowercase letters test
}
//thanks so much!!! sorry I can't talk :(

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
