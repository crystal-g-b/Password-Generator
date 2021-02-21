// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Create user input Arrays
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "~", "}", "{", "|", "_", "^" ];

//Create user input Variables

var passwordLength = "";
var yesLettersLower;
var yesLettersUpper;
var yesNumCharacters;
var yesSpecialCharacters;

//Create criteria prompt

var passwordCriteria = function() {
    var passwordLength = window.prompt("What is your prefered password length?");
    if (passwordLength < 8 && > 128 ) {
        alert("Password must be at minimum 8 characters and maximum 128 characters!");
    }
}



//when I click on generate password button then I am presented with a series of prompts for password criteria
generateBtn = window.prompt("length of password")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {

};
