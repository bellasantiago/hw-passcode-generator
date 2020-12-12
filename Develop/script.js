// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function fullCriteria() {

  //Initial user criterias set to negative value
  var userCriteria = {
    charLength: 0, 
    charLower: false,
    charUpper: false,
    charNumeric: false,
    charSpecial: false,
  };

  //Begins criteria prompts
  alert("Please select your criterias.");

  //First criteria prompt: Length and prints answer to console
  userCriteria.charLength = prompt("Please enter the total number of characters for the password. \n Selection must be between 8 and 128 characters.");

  //Log the user's criterias validating, at the end, if password length is within parameters
  if (userCriteria.charLength > 7 && userCriteria.charLength < 125) {

    //Second criteria prompt: Lowercase characters and prints answer to console
    userCriteria.charLower = confirm("Would you like to include LOWERCASE characters? \nSelect 'OK' for 'YES' or 'Cancel' for 'NO'.");
    //Third criteria prompt: Uppercase characters and prints answer to console
    userCriteria.charUpper = confirm("Would you like to include UPPERCASE characters? \nSelect 'OK' for 'YES' or 'Cancel' for 'NO'.");
    //Fourth criteria prompt: Numeric characters and prints answer to console
    userCriteria.charNumeric = confirm("Would you like to include NUMERIC characters? \nSelect 'OK' for 'YES' or 'Cancel' for 'NO'.");
    //Fifth criteria prompt: Special characters and prints answer to console
    userCriteria.charSpecial = confirm("Would you like to include SPECIAL characters? \nSelect 'OK' for 'YES' or 'Cancel' for 'NO'.");

    //Validation that at least one criteria was selected. Error shown if no criteria selected.
    if (userCriteria.charLower === false && userCriteria.charUpper === false && userCriteria.charNumeric === false && userCriteria.charSpecial === false) {
      alert("Invalid input. \nPlease select at least one criteria.");
      console.clear();
    }
    //If validation passes, log user's criteria selection
    else {
      console.log("Password length selected: " + userCriteria.charLength);
      console.log("Include lowercase: " + userCriteria.charLower);
      console.log("Include uppercase: " + userCriteria.charUpper);
      console.log("Include numeric: " + userCriteria.charNumeric);
      console.log("Include special character: " + userCriteria.charSpecial);
    }
  }

  //If minimum and maximum numbers are not respected, alert an error for user to try again and clears console
  else {
  alert("Invalid input. \nPlease select a number between 8 and 128.");
  console.clear();
  }
  
}

function generatePassword() {
  // Call on the prompt questions and stores results
  fullCriteria();
  var charResult;

  if (userCriteria.charLower) {
    charResult += "abcdefghijklmnopqrstuvwxyz";
  }
  if (userChoices.charUpper) {
    charResult += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (userChoices.charNumeric) {
    charResult += "0123456789";
  }
  if (userChoices.charSpecial) {
    charResult += "!@#$%^&*()_+~`|}{[]:;?,><.-=";
  }
    
  var finalPassword = [];

    while (finalPassword.length < userChoices.charLength) {
      finalPassword.push(charResult.charAt(Math.floor(Math.random() * charResult.length)),);
    }
    return finalPassword.join();
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

