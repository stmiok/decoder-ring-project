// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//When building the function, keep the following constraints and rules in mind:

//The input could include spaces and letters as well as special characters such as #, $, *, etc.
//Spaces should be maintained throughout.
//Capital letters can be ignored.  >> use .toLowerCase 
//The alphabet parameter must be a string of exactly 26 characters, 
//which could include special characters such as #, $, *, etc. Otherwise, it should return false.
//All the characters in the alphabet parameter must be unique. Otherwise, it should return false.




const substitutionModule = (function () {
  // you can add any code you want within this function scope
 
  function substitution(input, alphabet, encode = true) {
    // The substitution function takes an input string, an alphabet string, and an optional encode flag

    if (!alphabet || alphabet.length !== 26 || /(.)\1/.test(alphabet) || new Set(alphabet).size !== 26) {
      // Checks if the alphabet is invalid or contains non-unique characters
      // Conditions for an invalid alphabet:
      // 1. Alphabet is falsy (null, undefined, empty string, etc.)
      // 2. Alphabet length is not equal to 26
      // 3. Alphabet contains repeated characters
      // 4. Alphabet contains non-unique characters
      return false; // returns false if the alphabet is invalid or contains non-unique characters
    }

    const lib1 = "abcdefghijklmnopqrstuvwxyz";
    const lib2 = alphabet.toLowerCase();

    function _translate(libA, libB) {
      // The _translate function performs the encoding or decoding based on the given libraries

      let result = "";
      const message = input.toLowerCase();

      for (let i = 0; i < message.length; i++) {
        const letter = message[i];

        if (letter.match(/[^ ]/)) {
          // Checks if the letter is not a space
          const index = libA.indexOf(letter);
          result += libB[index]; // Adds the corresponding letter from the second library
        } else {
          result += letter; // Adds the space character as is
        }
      }

      return result;
    }

    return encode ? _translate(lib1, lib2) : _translate(lib2, lib1);
    // Calls the _translate function based on the encode flag and the libraries
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
