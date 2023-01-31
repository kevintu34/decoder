// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false
    }
    //create a lookup key
    const lookup = "abcdefghijklmnopqrstuvwxyz"
    //loop through the input string
    let result = ""
    for (let letter of input.toLowerCase()) {
      //figure out the index number of each character
        //indexOf returns a negative number if it doesn't exist in the string
      const originalIndex = lookup.indexOf(letter)
      if(originalIndex === -1) {
        result += letter
      } 
      else {
        let shiftedIndex
        if(encode) {
          shiftedIndex = originalIndex + shift
          if(shiftedIndex > 25) {
            shiftedIndex -= 26
          }
          if(shiftedIndex < 0) {
            shiftedIndex += 26
          }
        }
        else {
          shiftedIndex = originalIndex - shift
          if(shiftedIndex > 25) {
            shiftedIndex -= 26
          }
          if(shiftedIndex < 0) {
            shiftedIndex += 26
          }
        }
        result += lookup[shiftedIndex]
      }
      //return something that is + shift indexes away from that
      //add it into a result string
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
