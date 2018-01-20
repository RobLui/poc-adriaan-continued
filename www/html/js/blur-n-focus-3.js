function fireUserNameBlurEvent(value) {
  if (value == "") {
    document.getElementById('userName').value = placeholder;
  }
}

function fireUserNameFocusEvent(value) {
  if (value == placeholder) {
    document.getElementById('userName').value = "";
  }
}