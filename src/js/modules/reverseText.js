function render(userText) {
    let userTextReversed = [];
    for (let i = userText.length; i >= 0; i--){
        userTextReversed.push(userText[i]);
        
    }
    return "reversed text: " + userTextReversed.join("");

    
}
export { render };