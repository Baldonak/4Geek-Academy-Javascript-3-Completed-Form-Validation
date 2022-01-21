/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//Validación---------------------------------------------------------------------------------------
function CustomValidation() {
  //Construir un objeto que contenga todos los mensajes de error y si aparecen o no <--------No implementado
  /*

  this.invalidities = {

    User:{
      This input needs to be at least 3 characters long : true,
      Must only contain letters and numbers (no special characters): true,
    }
  }

  */
  ////Array que contiene los mensajes de error que van ocurriendo cada vez que se toca una tecla
  this.invalidities = [];
  //Array que contiene los booleanos que nos dice si ocurre o no el error asociado
  //notInvalidities[0] ->This input needs to be at least 3 characters long
  this.notInvalidities = [false];
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
  //  2-Elimina el mensaje de error del array si no se cumple función <---------Por Imprementar
  //  3-Cambia el boolean "notInvalidities" a false si alguna condición no se cumple <---------Por Corregir
  //  4-Cambia clase del mensaje de error del html a no valido o valido para que cambie en el
  //  HTML

  checkValidity: function(input) {
    // UserName------------------------------------------------------------------------------------
    // Condition 1: This input needs to be at least 3 characters long
    if (input.value.length < 3) {
      this.addInvalidity("This input needs to be at least 3 characters long");
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(1)'
      );
      element.classList.add("invalid");
      element.classList.remove("valid");
      this.notInvalidities[0] = false;
    } else {
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(1)'
      );
      element.classList.remove("invalid");
      element.classList.add("valid");
      this.notInvalidities[0] = true;
    }

    console.log(`Validation: ${this.notInvalidities}`); //Test
    // Condition 2: Must only contain letters and numbers (no special characters) <-------------No se esta evaluando
    //     if (input.value.match(/[^a-zA-Z0-9]/g)) {
    //       this.addInvalidity(
    //         "Must only contain letters and numbers (no special characters)"
    //       );
    //       var element = document.querySelector(
    //         'label[for="uname"] li:nth-child(2)'
    //       );
    //       element.classList.add("invalid");
    //       element.classList.remove("valid");
    //       this.notInvalidities[1] = false;
    //     } else {
    //       var element = document.querySelector(
    //         'label[for="uname"] li:nth-child(2)'
    //       );
    //       element.classList.add("valid");
    //       element.classList.remove("invalid");
    //       this.notInvalidities[1] = true;
    //     }
  }
};
//-------------------------------------------------------------------------------------------------

var user_name_input = document.querySelector("#uname");
user_name_input.CustomValidation = new CustomValidation();
// var cardNo_input = document.querySelector("#cardNo");
// cardNo_input.CustomValidation = new CustomValidation();

var notFormInvalidities =
  user_name_input.CustomValidation
    .notInvalidities[0]; /*&& cardNo_input.notInvalidities*/

//Validación de los campos del formulario
user_name_input.addEventListener("keyup", function() {
  user_name_input.CustomValidation.checkValidity(this);
  console.log(`Validation final: ${notFormInvalidities}`); //<---------------------(¿Por qué muestra siempre true?)
  console.log(
    `Mensajes de error en array: ${user_name_input.CustomValidation.getInvalidity()}`
  );
});

//Para el envío del formulario si "notFormInvalidities" es "false"
var form = document.querySelector("#form");
form.addEventListener("submit", function(event) {
  if (!notFormInvalidities) {
    //--------------------------------------------------------
    alert("There are some errors. Cannot send the form");
    event.preventDefault();
    event.stopPropagation();
  }
});

// form.addEventListener("submit", function(event) {
//   if (true) {
//     event.preventDefault();
//     event.stopPropagation();
//     my_alert.classList.replace("display_none", "display_block");
//   }
// });

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
