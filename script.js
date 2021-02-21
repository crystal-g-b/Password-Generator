// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Create user input Arrays
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "~", "}", "{", "|", "_", "^" ];
var allCriteria = [ ]
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
    
    } else if (yesLettersLower && yesLettersUpper && yesNumCharacters && yesSpecialCharacters) {
        passwordOptions = lettersLower.concat(lettersUpper, numChoice, specialChar);
    
    } else if (yesLettersLower && yesLettersUpper && yesNumCharacters) {
        passwordOptions = lettersLower.concat(lettersUpper, numChoice);

    } else if (yesLettersUpper && yesNumCharacters && yesSpecialCharacters) {
        passwordOptions = lettersUpper.concat(numChoice, specialChar);

    } else if (yesNumCharacters && yesSpecialCharacters && yesLettersLower) {
        passwordOptions = numChoice.concat(specialChar, lettersLower);

    } else if (yesLettersLower && yesLettersUpper && yesSpecialCharacters); {
        passwordOptions = lettersLower.concat(lettersUpper, specialChar);
   
    }  if (yesLettersLower && yesLettersUpper) {
        passwordOptions = lettersLower.concat(lettersUpper);

    } else if (yesLettersUpper && yesNumCharacters) {
        passwordOptions = lettersUpper.concat(numChoice);  

    } else if (yesNumCharacters && yesSpecialCharacters) {
        passwordOptions = numChoice.concat(specialChar);

    } else if (yesSpecialCharacters && yesLettersLower) {
        passwordOptions = specialChar.concat(yesLettersLower);

    } else if (yesSpecialCharacters && yesLettersUpper) {
        passwordOptions = specialChar.concat(lettersUpper);

    } else if (yesNumCharacters && yesLettersLower) {
        passwordOptions = numChoice.concat(lettersLower);

    } else if (yesLettersLower) {
        passwordOptions = lettersLower;
    
    } else if (yesLettersUpper) {
        passwordOptions = lettersUpper;

    } else if (yesNumCharacters) {
        passwordOptions = numChoice;

    } else if (yesSpecialCharacters) {
        passwordOptions = specialChar;
    };

    console.log(passwordOptions);

    var randomPassword = [];

    for (var i = 0; i < passwordLength; i++) {
        var pickedOptions = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
        
    }
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);
