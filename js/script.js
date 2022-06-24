// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordLower;
var passwordUpper;
var passwordNumber;
var passwordSpecial;

let alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
let selections = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = parseInt(prompt('How long should the password be?  (between 8 and 128 characters)'));
  console.log(passwordLength);
  console.log(typeof passwordLength);

  //checks if cancel is selected and ends function on confirmation
  if(!passwordLength){
    var close = confirm('Select OK to stop password generation');
    console.log(typeof close);
    console.log(close);
    if(close){
      return;
    }
    else {
      generatePassword();
    }
    
  }
  

  //Checks if input is a number
  while (isNaN(parseInt(passwordLength))){
      passwordLength = parseInt(prompt('This input requires a number between 8 and 128'));
  }
  console.log(passwordLength);
  console.log(typeof parseInt(passwordLength));
  console.log(typeof passwordLength);
  console.log(parseInt(passwordLength));
  

  //checks to see that the input is between 8 and 128
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt('Number must be between 8 and 128');
  }

  //if input is between 8 and 128 moves to what is required for the password
  if (passwordLength > 8 || passwordLength < 128) {
    passwordLower = confirm('Does the password need lowercase?');
    passwordUpper = confirm('Does the password need uppercase?');
    passwordNumber = confirm('Does the password need numbers?');
    passwordSpecial = confirm('Does the password need special characters?');

    while(!passwordLower && !passwordUpper && !passwordNumber && !passwordSpecial){
      selections = alert('A selection is required');
      passwordLower = confirm('Does the password need lowercase?');
      passwordUpper = confirm('Does the password need uppercase?');
      passwordNumber = confirm('Does the password need numbers?');
      passwordSpecial = confirm('Does the password need special characters?');
    }

    //check to confirm results
    console.log(passwordLower, passwordUpper, passwordNumber, passwordSpecial)
}

  //all 4 selected
  if (passwordLower && passwordUpper && passwordNumber && passwordSpecial){
    selections = alphabetLower + ',' + alphabetUpper + ',' + num + ',' + specialChar;

    console.log(selections);
    console.log(typeof selections);
    console.log(typeof passwordLower);
  }
  //3 selections
  else if (passwordLower && passwordUpper && passwordNumber){
    selections = alphabetLower + ',' + alphabetUpper + ',' + num;
  }
  else if (passwordLower && passwordUpper && passwordSpecial){
    selections = alphabetLower + ',' + alphabetUpper + ',' + specialChar;
  }
  else if (passwordUpper && passwordNumber && passwordSpecial){
    selections = alphabetUpper + ',' + num + ',' + specialChar;
  }
  else if (passwordLower && passwordNumber && passwordSpecial){
    selections = alphabetLower + ',' + num + ',' + specialChar;
  }
  //2 selections
  else if (passwordLower && passwordUpper){
    selections = alphabetLower + ',' + alphabetUpper;
  }
  else if (passwordNumber && passwordSpecial){
    selections = num + ',' + specialChar;
  }
  else if (passwordLower && passwordNumber){
    selections = alphabetLower + ',' + num;
  }
  else if (passwordUpper && passwordSpecial){
    selections = alphabetUpper + ',' + specialChar;
  }
  else if (passwordLower && passwordSpecial){
    selections = alphabetLower + ',' + specialChar;
  }
  else if (passwordUpper && passwordNumber){
    selections = alphabetUpper + ',' + num;
  }
  //single selections
  else if (passwordLower){
    selections = alphabetLower
  }
  else if (passwordUpper){
    selections = alphabetUpper;
  }
  else if (passwordNumber){
    selections = num;
  }
  else if (passwordSpecial){
    selections = specialChar;
  }

  //converts selection string to array for password generation
  selections = selections.split(',');
  console.log(selections);
  console.log(selections[9]);
  console.log(typeof selections);
  console.log(selections.length);

  //create password array to push characters for random password
  var pw = [];

  //for loops to select random elements from array for password
  for (i = 0; i < passwordLength; i++){
    var pwSelections = selections[Math.floor(Math.random() * selections.length)];
    pw.push(pwSelections);
  }
  console.log(pw);
  //convert array to string
  passwordGen = pw.join('');
  console.log(passwordGen);
  return passwordGen;
}