
 
function countConsonants(userText) {
    return userText.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  }
  
  
  function render(userText) {
    let count = countConsonants(userText);
    let output = "There are " + count + " consonants in the text";
    return output;
  }
  
  
  export { render };
  
  