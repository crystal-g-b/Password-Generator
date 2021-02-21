// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Create user input Arrays
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "~", "}", "{", "|", "_", "^" ];

//Create user input Variables

var passwordLength;
var yesLettersLower;
var yesLettersUpper;
var yesNumCharacters;
var yesSpecialCharacters;

var passwordOptions = "";

//Create criteria prompt

generateBtn.addEventListener("click", passwordCriteria);

var passwordCriteria = function() {
    var passwordLength = window.prompt("What is your prefered password length?");
    
    //If the password is less than 8 characters user is alerted with minimum character message
    if (passwordLength < 8) {
        alert("Password must be at minimum 8 characters!");
        passwordLength = window.prompt("What is your prefered password length?");  

    //If the password is more than 128 characters user is alerted with maximum character message
    } if (passwordLength > 128) {
        alert("Password must be a less than 128 characters!");
        passwordLength = window.prompt("What is your prefered password length?");
    }; 
    
    //Confirm with user if they would like to use lowercase letters
    yesLettersLower = confirm("Will password contain lowercase letters?");

    //confirm with user if they would like to use uppercase letters
    yesLettersUpper = confirm("Will password contain uppercase letters?");

    //confirm with user if they would like to use numeric characters
    yesNumCharacters = confirm("Will password contain numeric characters?");

    //confirm with user if they would like to use special characters
    yesSpecialCharacters = confirm("Will password contain special characters?");


    //if user does not confirm any of the criterias then they will be prompted to choose one and will return back to criteria prompt
    if (!yesLettersLower && !yesLettersUpper && !yesNumCharacters && !yesSpecialCharacters) {
        alert("You must choose a criteria!");
        yesLettersLower = confirm("Will password contain lowercase letters?");
        yesLettersUpper = confirm("Will password contain uppercase letters?");
        yesNumCharacters = confirm("Will password contain numeric characters?");
        yesSpecialCharacters = confirm("Will password contain special characters?");
    } 

    var passwordOptions = [];

    if (yesLettersLower) {
        passwordOptions = passwordOptions.concat(lettersLower)
    }

    if (yesLettersUpper) {
        passwordOptions = passwordOptions.concat(lettersUpper)
    }
       
    if (yesNumCharacters) {
        passwordOptions = passwordOptions.concat(numChoice)
    }

    if (yesSpecialCharacters) {
        passwordOptions = passwordOptions.concat(specialChar)
    }

    var randomPassword = "";

    for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    }
}


// Write password to the #password input
function writePassword() {
    var password = passwordCriteria();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//document.getElementById("password").textContent = randomPassword; 
//document.querySelector("#generate").addEventListener("click", writePassword);


generateBtn.addEventListener("click", writePassword);
