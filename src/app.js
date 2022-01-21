/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//Validación---------------------------------------------------------------------------------------
function CustomValidation() {
  this.invalidities = [];
  this.notInvalidities = true;
}

CustomValidation.prototype = {
  //Función para añadir mensaje de error al array "invalidities"
  addInvalidity: function(message) {
    this.invalidities.push(message);
  },
  //Función para elimir mensaje de error del array "invalidities"
  // removeInvalidity: function() {

  // }
  //Función para unir todos los mensajes de error array "invalidities" y mostrarlos en una lista
  getInvalidity: function() {
    return this.invalidities.join(". \n");
  },
  //Función para unir todos los mensajes de error array "invalidities" y mostrarlos en una lista
  showInvalidities: function() {
    var element = document.querySelector(".input-requirement");
    element.innerHTML = getInvalidity();
  },

  //Función para hacer las comprobaciones:
  //  1-Añade mensaje de error al array "invalidities" si se cumple la condición
  //  2-Elimina el mensaje de error del array si no se cumple <-----------(VICTOR) Imprementar
  //  función
  //  3-Cambia el boolean "notInvalidities" a false si alguna condición no se cumple

  checkValidity: function(input) {
    // UserName
    // Condition 1: This input needs to be at least 3 characters long
    if (input.value.length < 3) {
      this.addInvalidity("This input needs to be at least 3 characters long");
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(1)'
      );
      element.classList.add("invalid");
      element.classList.remove("valid");
      this.notInvalidities = false;
    } else {
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(1)'
      );
      element.classList.remove("invalid");
      element.classList.add("valid");
    }
    // Condition 2: Must only contain letters and numbers (no special characters)
    if (input.value.match(/[^a-zA-Z0-9]/g)) {
      this.addInvalidity(
        "Must only contain letters and numbers (no special characters)"
      );
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(2)'
      );
      element.classList.add("invalid");
      element.classList.remove("valid");
      this.notInvalidities = false;
    } else {
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(2)'
      );
      element.classList.add("valid");
      element.classList.remove("invalid");
    }
  }
};
//-------------------------------------

var user_name_input = document.querySelector("#uname");
user_name_input.CustomValidation = new CustomValidation();
// var cardNo_input = document.querySelector("#cardNo");
// cardNo_input.CustomValidation = new CustomValidation();

var notFormInvalidities =
  user_name_input.CustomValidation
    .notInvalidities; /*&& cardNo_input.notInvalidities*/

//Validación de los campos del formulario
user_name_input.addEventListener("keyup", function() {
  user_name_input.CustomValidation.checkValidity(this);
  console.log(`Validation: ${notFormInvalidities}`);
  console.log(user_name_input.CustomValidation.invalidities); //<---------------------(Porque no se hace visible?)
});

//Crea evento para el form que detiene el envio del formulario
//si notFormInvalidities es "false"

var form = document.querySelector("#form");
form.addEventListener("submit", function(event) {
  if (!notFormInvalidities) {
    //--------------------------------------------------------
    alert("Any error");
    my_alert.classList.replace("display_none", "display_block");
    event.preventDefault();
  }
});

//-------------------------------------------------------------------------------------------------

// //Código de Bootstrap------------------------------------------------------------------------------
// (function() {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll(".needs-validation");
//   var my_alert = document.querySelector("#header_alert_message");

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms).forEach(function(form) {
//     form.addEventListener(
//       "submit",
//       function(event) {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//           my_alert.classList.replace("display_none", "display_block");
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();
