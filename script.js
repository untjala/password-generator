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
    return "";

    // Checks for lowercase letters
    var lowercase = confirm("Would you like to use lowercase letters?");
    if (lowercase === true) {

    } else alert("OK")
  }
  //Checks for uppercase lettters
  var uppercase = confirm("Would you like to use uppercase letters?");
  if (uppercase === true) {

  } else alert("OK")
}
//Checks for special characters
console.log(special)
var special = confirm("Would you like to use special characters?");
if (special === true) {

} else alert("OK") 

//Checks for numbers
console.log(numbers)
var numbers = confirm("Would you like to use numbers?");
if (numbers === true) {

} else {
  alert("Please use special characters and or/numbers.");
};
// Password generation based on user choices
// for (var i = 0; i > 8; i++)
//   var characters = lowercase
// var pasword = "";
// var passwordMaker = Math.floor(Math.random() * password.length);
// console.log(passwordMaker);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);