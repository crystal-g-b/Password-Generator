# Password-Generator

## Overview of Assignment

For this Assignment, we were required to create a password generator with prompts. This password generator would need to create a new random password every time the user entered in the necessary criteria. 

In order to carry out this assignment, I needed to build a functioning Javascript file from the Javascript shell we were provided. Within this file, I would need to include arrays, conditional statements and prompt methods in order to get the generator to function as needed.

### The following are the steps I took to build the JS file for our Password Generator

* We were already given the query selector at the beginning of the file so I focused on creating the arrays for the user input. These arrays contained the values for each criteria required for the password

* I followed up by creating Input variables. These variables I would use within my conditional statements

* I then created the password criteria function. It is withing this function that I added my prompt method and conditional statements giving different values depending on whether the criteria was fulfilled or not. Within this function I also included alerts in case the user did not fulfill the criteria.

* This was followed creating a for loop for selecting random characters for the password

* lastly I revised the write password function so included the syntax that added to the JS file.

This all came together and produced a functioning password selector.

### Below you will find step by step instructions on how to use the password generator

* First when you click on the link at the end of this page, you will be brought to a password generator page
![Generator-1st-page](/Assets/images/step-1.png)

* Then once you click on the generator button, you are promoted to advise the amount of characters you would like in your password. This generator is set to be between 8- 128 characters. If you choose outside of those parameters, you will receive an alert and be sent back to the previous prompt.
![Generator-2nd-page](/Assets/images/step-2.png)

* If you do pick a password length within the acceptable parameters, you are then asked if you would like to use lower case letters
![Generator-3rd-page](/Assets/images/step-3.png)

* If you click okay, then you are asked if you would like to use upper case letters
![Generator-4th-page](/Assets/images/step-4.png)

* If you pick ok, then you are asked if you would like numeric characters
![Generator-5th-page](/Assets/images/step-5.png)

* If you pick ok, then you are asked if you would like special characters in your password
![Generator-6th-page](/Assets/images/step-6.png)

* If all these criteria's are met then a unique password is generated
![Generator-7th-page](/Assets/images/step-7.png)

A unique password is created every time you run the function.

*Please note that if all 4 criterias are not met, then the user will be advised that they need to pick one of the criterias and they will looped back to the first initial question.

If you'd like to test out this generator then please click the link below

* [Password Generator](https://crystal-g-b.github.io/Password-Generator/)

or if you'd like to see the back end, then you can visit the below

* [Git Hub](https://github.com/crystal-g-b/Password-Generator)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


