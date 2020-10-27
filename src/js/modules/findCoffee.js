 

function render(userText) {
  let count = userText.search("coffee");
  let output = "Yes, there is " + count + " coffee in this text. ";
  return output;
}


export { render };

