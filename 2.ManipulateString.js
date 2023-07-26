function manipulateString(inputString) {
    const manipulatedString = inputString.toUpperCase();
  
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    return logString;
  }

const sentence = "Hello, World!";
const logManipulatedString = manipulateString(sentence);
logManipulatedString();