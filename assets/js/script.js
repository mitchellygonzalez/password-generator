// Assignment code here
function generatePassword (){
numbers="0123456789"
lowercase="abcdefghijklmnopqrstuvwxyz"
uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
characters="!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

incomplete = true
while (incomplete) {
  var promptLength = window.prompt('Choose a password length between 8 and 128 characters.');
 
  if (parseInt(promptLength)< 8 || parseInt(promptLength)>128) {
    window.alert("You must pick a length that is between 8 and 128 characters");
    continue
  } 
  window.alert("Please pick at least 1 of the following 4 options.")
  var promptLowercase = window.confirm('Do you want to include lowercase letters? If so, click OK.');

  var promptUppercase = window.confirm('Do you want to include uppercase letters? If so, click OK.');
  
  var promptCharacters = window.confirm('Do you want to include special characters? If so, click OK.');
  
  var promptNumber = window.confirm('Do you want to include numeric characters? If so, click OK.');

  prefs=[parseInt(promptLength), promptLowercase, promptUppercase, promptCharacters, promptNumber]

  if (prefs[1]==false && prefs[2]==false && prefs[3]==false && prefs[4]==false) {
    window.alert("You must select at least 1 of the 4 options!")
  }
  else {
    incomplete = false
  }
}

// THIS IS ALL FINE ABOVE:


var password = ""

allowedCharacters=[numbers, lowercase, uppercase, characters]

// for (i=0;i<prefs.length;i++) {
//   if (prefs[i]==true) {
//     allowedCharacters.push(prefs[i])
//   }
// }

for (i=0; i<parseInt(promptLength);i++) {
  let type = allowedCharacters[Math.floor(Math.random()*allowedCharacters.length)]
  let char = type[Math.floor(Math.random()*type.length)]
  password += char
}
return password
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

