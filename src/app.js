/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//Validación---------------------------------------------------------------------------------------
function CustomValidation(/*error_obj*/) {
  //Construir un objeto que contenga todos los mensajes de error y si aparecen o no <--------No implementado / mejor si fuera parametro de entrada error_obj
  /*

  this.errors = {
    type_error:{
      Long:
      {
        conditional: function(v) { return (v > 3); },
        message: "This input needs to be at least 3 characters long",
      },
      Special_charact:
      {
        conditional: function(v) { return v.match(/[^a-zA-Z0-9]/g); },
        message: "Must only contain letters and numbers (no special characters)",
      }
    },
    user_errors:
    {
      this.type_error.Long
      
    }
    pass_errors:
    {
      Long:
      {
        conditional: user_errors.Long.conditional,
        message: user_errors.Long.message,
        boolean: true,
      }
    }
  }

  */
  ////Array que contiene los mensajes de error que van ocurriendo cada vez que se toca una tecla
  this.errors = [];
  //Array que contiene los booleanos que nos dice si ocurre o no el error asociado
  //---notErrors[0][0] ->This input needs to be at least 3 characters long <--------------Añadiendo más de un input
  //---notErrors[0][1] ->Must only contain letters and numbers (no special characters) <--------------Añadiendo más de un input
  //this.notErrors = [[false, false],[false]];<--------------Añadiendo más de un input
  this.notErrors = [false, false];
}

CustomValidation.prototype = {
  //Función para añadir mensaje de error al array "errors"
  addError: function(message) {
    this.errors.push(message);
  },
  //Función para elimir mensaje de error del array "errors"
  // removeError: function() {

  // }
  //Función para unir todos los mensajes de error array "errors" y mostrarlos en una lista
  getError: function() {
    return this.errors.join(". \n");
  },
  //Función para unir todos los mensajes de error array "errors" y mostrarlos en una lista
  showErrors: function() {
    var element = document.querySelector(".input-requirement");
    element.innerHTML = getError();
  },
  //Función para hacer las comprobaciones:
  //  1- Añade mensaje de error al array "errors" si se cumple la condición
  //  2- Elimina el mensaje de error del array si no se cumple función <---------Por Imprementar
  //  3- Cambia el boolean "notErrors" a false si alguna condición no se cumple <---------Por Corregir
  //  4- Cambia clase del mensaje de error del html a no valido o valido para que cambie en el
  //  HTML

  checkValidity: function(input) {
    // UserName------------------------------------------------------------------------------------
    // Condition 1: This input needs to be at least 3 characters long
    if (input.value.length < 3) {
      this.addError("This input needs to be at least 3 characters long");
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(1)'
      );
      element.classList.add("invalid");
      element.classList.remove("valid");
      this.notErrors[0] = false;
    } else {
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(1)'
      );
      element.classList.remove("invalid");
      element.classList.add("valid");
      this.notErrors[0] = true;
    }
    //Condition 2: Must only contain letters and numbers (no special characters)
    if (input.value.match(/[^a-zA-Z0-9]/g)) {
      this.addError(
        "Must only contain letters and numbers (no special characters)"
      );
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(2)'
      );
      element.classList.add("invalid");
      element.classList.remove("valid");
      this.notErrors[1] = false;
    } else {
      var element = document.querySelector(
        'label[for="uname"] li:nth-child(2)'
      );
      element.classList.add("valid");
      element.classList.remove("invalid");
      this.notErrors[1] = true;
    }
    return this.notErrors;
  }
};
//-------------------------------------------------------------------------------------------------
var user_name_input = document.querySelector("#uname");
user_name_input.CustomValidation = new CustomValidation();
// var cardNo_input = document.querySelector("#cardNo");
// cardNo_input.CustomValidation = new CustomValidation();

var notFormErrors = user_name_input.CustomValidation.notErrors;
var notSimpleFormErrors = false;

//Validación de los campos del formulario
user_name_input.addEventListener("keyup", function() {
  user_name_input.CustomValidation.checkValidity(this);
  notFormErrors = user_name_input.CustomValidation.checkValidity(this);
  //CUIDADO!!!!!!!!!!!!!!!!!!!! Si el array es de dos dimensiones hay que hacer la operación flatten
  notSimpleFormErrors = notFormErrors.reduce((p, c) => p && c);
  console.log(`Validation final: ${notFormErrors}`);
});

//Para el envío del formulario si "notFormErrors" es "false"
var form = document.querySelector("#form");
form.addEventListener("submit", function(event) {
  console.log(`Validation final que se mete dentro: ${notSimpleFormErrors}`);
  if (!notSimpleFormErrors) {
    alert("There are some errors. Cannot send the form");
    event.preventDefault();
    event.stopPropagation();
    document
      .querySelector("#header_alert_message")
      .classList.replace("display_none", "display_block");
  }
});
