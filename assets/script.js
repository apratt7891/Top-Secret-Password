// variables //
var number = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacter = ['!','@','$','%','&','*'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'];

var passwordLength = "";
var confirmNumber;
var confirmSpecialCharacter;
var confirmLowerCaseLetters;
var confirmUpperCaseLetters;

function generatePassword() {
  var password = alert("Please create a secure password");
  var password = alert('Your password needs to contain at least 8 characters');
  var password = alert('Your password must be a mixture of both uppercase and lowercase letters');
  var password = alert('Your password must contain at least one special character, eg., !@#?');
  var passwordLength = prompt ('How many characters will your password contain?');

  if (passwordLength < 8) {
    alert('Password must contain at least 8 characters');
  } else if (passwordLength > 128) {
    alert('Password cannot contain more than 128 characters');
  }
    else {
      alert('Please contine');
  }

  var confirmNumber = confirm('Please confirm your password will contain a number');
  var confirmSpecialCharacter = confirm('Please confirm your password will contain atleast one special character');
  var confirmLowerCaseLetters = confirm('Please confirm your password will contain lowercase letters');
  var confirmUpperCaseLetters = confirm('Please confirm your password will contain uppercase letters');
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
