function countNos(userText) {
    return userText.match(/[0-9]/gi).length;
  }
  
  
  function render(userText) {
    let count = countNos(userText);
    let output = "There are " + count + " numbers in the text";
    return output;
  }
  
  
  export { render };