
function updateText() {

  //we are collecting the value from the text area... by using on key down
  let text = document.getElementById('text-input').value;

  //we are setting the values here in our text out put area..
  document.getElementById('text-output').innerText = text;
}


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


function alignText(elem, alignType){

  //we are aligning text base on the id if its a left, etc..
  document.getElementById('text-output').style.textAlign = alignType;

  let buttonLists = document.getElementsByClassName('align');

  for (let i = 0; i < buttonLists.length; i++){
    buttonLists.classList.remove('active');
  }

  elem.classList.add('active');
}
