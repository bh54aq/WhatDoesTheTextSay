function countVowels(userText) {
    var vowels = userText.match(/[aeiou]/gi);
    return vowels === null ? 0 : vowels.length;
  }

  function render(userText) {
    let count = countVowels(userText);
    let output;
    if(count === 0){
      output = "There are no vowels in the text";
    }
    else{
      output = "There are " + count + " vowels in the text";
    }
    return output;
  }

export { render };