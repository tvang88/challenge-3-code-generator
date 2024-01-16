// Assignment Code
var generateBtn = document.querySelector("#generate");
// array of special character, numbers, uppercase characters, and lowercase charactrers that must be selected for password
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "'", "/", ".", "<", ">", ",", ";", ":", "[", "]","{", "}", ];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var hasUppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

//function for users password criteria
function getPasswordOptions () {
  //length of password variable
  var length = parseInt (
    prompt ("How many characters would you like your password to contain?"),
    8
  );
  //Statement to check is password length is a number. End prompt if this is false.
  if (Number.isNaN(length)) {
    alert ("Password length must be a number");
    return null;
  }
  //Conditional statement to see if the password length is at least 8 characters long.The prompt will end if this come up false.
  if (length < 8) {
    alert ("Password does not meet the criteria. Must have at least 8 characters");
    return null;
  }
  //Conditional statement to check if the password length is more than 20 characters long. The prompt will end if it results true.
  if (length > 45) {
    alert ("password exceeds allowed amount of 45 characters");
    return null;
  }
  //Variable to store boolean containing Numeric characters
  var hasNumericCharacters = confirm(
    "Click OK to confirm."
  );
  //variable to store boolean containing special characters
  var hasSpecialCharacters = confirm(
    "Click OK to confirm special character."
  );
  //Variable to store boolean containing lowercase characters
  var hasLowercaseCharacter = confirm(
    "Click OK to confirm Lowercase characters"
  );
  //Variable to store boolean containing uppercase characters
  var hasUppercaseCharacters = confirm(
    "Click OK to confirm Uppercase characters"
  );
  //
  if (hasSpecialCharacters) {
  }else if (hasNumericCharacters) {
  }else if (hasLowercaseCharacter){
  }else if (hasUppercaseCharacters){
  }else {
    alert("Password must include at least one type of character.")
  }

  //Store user inputs
var getPasswordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowercaseCharacter: hasLowercaseCharacter,
  hasUppercaseCharacters: hasUppercaseCharacters
};

  return getPasswordOptions;
}

  //Function to get an array from a random element.
  function getRandom(array) {
    var randIndex = Math.floor(Math.random() * array.length);
    var randElement = array [randIndex]; 

    return randElement;
  }

  //Function to generate password
  function generatePassword () {
    var options = getPasswordOptions ();
    //Creating an empty array
    var currentArr = new Array()
    //Conditional statement that links together new array
    if (options.hasSpecialCharacters) {
      currentArr = currentArr.concat (specialCharacters)
    }
    if (options.hasNumericCharacters) {
      currentArr = currentArr.concat(numericCharacters)
    }
    if(options.hasLowercaseCharacter) {
      currentArr = currentArr.concat(lowercase)
    }
    if (options.hasUppercaseCharacters) {
      currentArr = currentArr.concat(hasUppercaseCharacters)
    }
    console.log(currentArr)
    //Generate random string password
    let pass = ""
    let i = 0
    while (i , options.length) {
      pass += getRandom (currentArr);
      i++
    }
    return pass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//assistance and aid to complete project was provided by google searches, slack, MDN, and youtube videos. 