// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  

  function caesar(input, shift, encode = true) {
    // your solution code here
        //Pseudo code ceaser:

// *check that shift fits the requirements*
if (shift == 0 || shift < -25 || shift > 25 || shift == null) {
return false;
}

//*shift the other way if decoding*
if (!encode) {
  shift *= -1;
  // change direction of shift 
}

// take the input and change to lowercase
const message = input.toLowerCase();

// empty string to store messages
let endMessage = ""; 

//for loop
 //*find the charcode of each character*
for (let i = 0; i < message.length; i++) {
  const letter = message[i];

  //check if given letter is part of the alphabet
  if (letter.match(/[a-z]/)) {
    
    // shift the characters of the code
    let code = message.charCodeAt(i) + shift;
    
    if (code > 122) {
      code = code - 26;
    }

    if (code < 97) {
      code = code + 26;
    }

    endMessage += String.fromCharCode(code);
  }
  
  else {
    endMessage += letter;
  }
}
 return endMessage;

 }

 return {
   caesar,
 };

})();

module.exports = { caesar: caesarModule.caesar };
