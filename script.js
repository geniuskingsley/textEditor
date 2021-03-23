/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText() {

  //we are collecting the value from the text area... by using on key down
  let text = document.getElementById('text-input').value;

  //we are setting the values here in our text out put area..
  document.getElementById('text-output').innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  
  //we are making our button active when we click on it..
  elem.classList.toggle('active');

  //making text bold..
  document.getElementById('text-output').classList.toggle('bold');

}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
  elem.classList.toggle('active');

  //getting the element..
  let formattedText = document.getElementById('text-output');

  if (formattedText.classList.contains('underline')) {
    formattedText.classList.remove('underline');
  }

  else {
    formattedText.classList.add('underline');
  }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){

  //we are aligning text base on the id if its a left, etc..
  document.getElementById('text-output').style.textAlign = alignType;

  let buttonLists = document.getElementsByClassName('align');

  for (let i = 0; i < buttonLists.length; i++){
    buttonLists.classList.remove('active');
  }

  elem.classList.add('active');
}