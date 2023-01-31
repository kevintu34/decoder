// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //creates a new set with only the unique alphabets, checking to see if the set's size is 26
    const uniqueAlphabet = new Set(alphabet)
    if (!alphabet || alphabet.length !== 26 || uniqueAlphabet.size !== 26) {
        return false
      }
    const lookup = "abcdefghijklmnopqrstuvwxyz"
    let result = ""
    for (let letter of input.toLowerCase()) {
        //encode
        if(encode) {
        //look at each letter and find its position on the alphabet index
          const indexNumber = lookup.indexOf(letter)
          if(indexNumber === -1) {
              result += letter
        }
        else {
          result += alphabet[indexNumber]
        }
        //return the letter at the same index on the new alphabet
        }
        //decode
        else {
          const indexNumber = alphabet.indexOf(letter)
          if(indexNumber === -1) {
            result += letter
          }
          else {
            result += lookup[indexNumber]
          }
        }
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
