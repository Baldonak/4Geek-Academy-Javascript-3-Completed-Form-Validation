/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//-------------------------------------------------------------------------------------------------
function CustomValidation() {
  this.invalidities = [];
}

CustomValidation.prototype = {
  addInvalidity: function(message) {
    this.invalidities.push(message);
  },
  getInvalidity: function() {
    return this.invalidities.join(". \n");
  },
  checkValidity: function(input) {
    // Condition 1: This input needs to be at least 3 characters long
    if (input.value.length < 3) {
      this.addInvalidity("This input needs to be at least 3 characters long");
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(1)'
      );
      element.classList.add("invalid");
      element.classList.remove("valid");
    } else {
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(1)'
      );
      element.classList.remove("invalid");
      element.classList.add("valid");
    }
    // Condition 2: Must only contain letters and numbers (no special characters)
    if (!input.value.match(/[^a-zA-Z]/g)) {
      this.addInvalidity(
        "Must only contain letters and numbers (no special characters)"
      );
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(2)'
      );
      element.classList.add("invalid");
      element.classList.remove("valid");
    } else {
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(2)'
      );
      element.classList.add("valid");
      element.classList.remove("invalid");
    }
  }
};

var user_name_input = document.getElementById("uname");
user_name_input.CustomValidation = new CustomValidation();

user_name_input.addEventListener("keyup", function() {
  user_name_input.CustomValidation.checkValidity(this);
});
//-------------------------------------------------------------------------------------------------

//Código de Bootstrap------------------------------------------------------------------------------
(function() {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  var my_alert = document.querySelector("#header_alert_message");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          my_alert.classList.replace("display_none", "display_block");
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
