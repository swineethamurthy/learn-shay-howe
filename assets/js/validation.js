/*
=========================================
function to use with HTML 5 attributes
=========================================
*/
function chkValidName() {
  const nameField = document.querySelector("input");

  nameField.addEventListener("input", () => {
    nameField.setCustomValidity("");
    nameField.checkValidity();
    console.log(nameField.checkValidity());
  });

  nameField.addEventListener("invalid", () => {
    nameField.setCustomValidity("Name can contain only letters and spaces");
  });
}
