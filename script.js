// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  // Sets password length parameters 
  var input = parseInt(prompt("Choose a length between 8 and 128."));
  if (input >= 8 && input <= 128) {
    //Returns invalid character length message 
  } else {
    alert("Please enter a length between 8 and 128.");
  }

  // Checks for special characters
  var specialChar = confirm("Would you like to use special characters?")
  if (specialChar) {
    generatePassword(generate)
  } else {
    alert("OK")
  }

  // Checks for numbers 
  var numbers = confirm("Would you like to use numbers?")
  if (numbers === Yes) {
    generatePassword()
  } else {
    alert("Please use either special characters and/or numbers.")
  }

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);