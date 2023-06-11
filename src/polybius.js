// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const numberLibrary = [
      //library of numbers
      "11","21","31","41","51", // row 1
      "12","22","32","42","52", // row 2
      "13","23","33","43","53", // row 3
      "14","24","34","44","54", // row 4 
      "15","25","35","45","55", // row 5
    ];
    const letterLibrary = [
      //library of letters
      "a","b","c","d","e", // row 1
      "f","g","h","i/j","k", //row 2
      "l","m","n","o","p", // row 3
      "q","r","s","t","u", // row 4
      "v","w","x","y","z", // row 5
    ];
   // console.log(numberLibrary.length);
   // console.log(letterLibrary.length);

    if (encode) { 
      //encodes a message
      let result = "";       //stores encoded message
      const message = input.toLowerCase(); 

      for (let i = 0; i < message.length; i++) {    //loop through the message
        const letter = message[i];
        //console.log(`letter is ${letter}`);

        if (letter.match(/[a-z]/)) {              //check if the character is a letter
          if (letter === "i" || letter === "j") {
            result += "42";                       //return 42 if letter is i and/or j
          } else {
            const num = letterLibrary.indexOf(letter); //look up index of letter
            result += numberLibrary[num];     //add number with matching index to the code
          }
        } else {
          result += letter;    //character isn't a letter, use original character & maintain spaces
        }
      }

      return result; 
    }  else { // decode message 
        const messageArr = input.split(" ");    //split message into an array by word
      //console.log(messageArr);
        const lettersArr = [];

        for (word of messageArr) {
        lettersArr.push(word.match(/.{2}/g)); //new array where each index is an array
        //of number pairs representing each letter. each index of lettersArr is one
        //word of the message
      }

      const isEven = messageArr.every((word) => word.length % 2 === 0); //check if word is an even number of characters
     
      if (!isEven) { //if odd, return false
        return false;
      }

      const finalArr = []; //stores decoded letters
      //  console.log(lettersArr);
      for (word of lettersArr) {
        //decode the letters
        const tempArr = [];

        for (letter of word) {
          if (letter === "42") {
            tempArr.push("(i/j)"); //use i/j for 42
          } else {
            const givenNum = numberLibrary.indexOf(letter);
            const givenLetter = letterLibrary[givenNum];
            tempArr.push(givenLetter); //decode letters
          }
        }
        finalArr.push(tempArr);
      }
      //console.log(finalArr);
      const decodedArr = [];
      //const decodedArr = finalArr.map((word) => word.join(""));
      for (word of finalArr) {
       const combinedLetters = word.join(""); //join letters of individual words
      decodedArr.push(combinedLetters);
     }
      //console.log(decodedArr);
      const finalMessage = decodedArr.join(" "); //join words back into sentence maintaining spaces
      return finalMessage;
    }
    //console.log(`result is ${result}`);
    
  }

  polybius("jumanji", true);// remove

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
