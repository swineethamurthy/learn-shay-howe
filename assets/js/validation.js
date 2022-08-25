function isValidName() {
  var regex = /^[A-Za-z ]+$/;
  var inputName = document.getElementById("name").value;
  if (!regex.test(inputName) || inputName.length >= 15) {
    showValidation(
      "name-validation",
      "Name can have only spaces and Alphabets and of maximum length 15."
    );
  } else {
    document.getElementById("name-validation").style.display = "none";
  }
}

function isValidEmail() {
  var inputEmail = document.getElementById("email").value;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)) {
    showValidation("email-validation", "Please enter a valid email ID");
  } else {
    document.getElementById("email-validation").style.display = "none";
  }
}

function chkCommentLength() {
  var inputComment = document.getElementById("comments").value;
  if (inputComment.length != 0 && inputComment.length >= 200) {
    showValidation(
      "comment-validation",
      "Comments can have maximum length of 200."
    );
  } else {
    document.getElementById("comment-validation").style.display = "none";
  }
}

function showValidation(toValidate, validationMessage) {
  var elementToValidate = document.getElementById(toValidate);
  elementToValidate.style.display = "block";
  elementToValidate.innerText = validationMessage;
}

function formValidation() {
  isValidName();
  isValidEmail();
  chkCommentLength();
}
