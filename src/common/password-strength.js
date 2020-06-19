// Adding password strenght module to register screen

import $ from "jquery";

export function passStrength(){

  // Setting initial parameters
  let inputP = $('#password');
  let upperCasePresent = 0;
  let numberPresent = 0;
  let i=0;
  let character='';

  // Checking what kind of input was given by the user.
  // It checks for number, letters and capital letters
  while (i <= inputP.val().length){
    character = inputP.val().charAt(i);
    if (!isNaN(character * 1)){
        numberPresent++;
    }else{
        if (character == character.toUpperCase()) {
            upperCasePresent++;
        }
        if (character == character.toLowerCase()){
        }
    }
    i++;
  }

  // Checks if required number of characters was given by the user
  if(inputP.val().length>=12) {
    $('#checkbox-3').css('color', "#b37436")
  };

  if(upperCasePresent >= 1) {
    $('#checkbox-1').css('color', "#b37436")
  };

  if(numberPresent > 1) {
    $('#checkbox-2').css('color', "#b37436")
  };

    // Adds a graphical display on the passwords strength
  if(inputP.val().length===0){
    $('.weak').hide();
    $('.medium').hide();
    $('.strong').hide();
    $('#strength-text').hide();
    $("#signup").attr("disabled", true);

    }else if(inputP.val().length < 6){
      $('.weak').show(); 
      $('#strength-text').show();
      $("#signup").attr("disabled", true);

    }else if(inputP.val().length >= 6 && inputP.val().length < 12){
      $('.medium').show();
      $("#signup").attr("disabled", true);

    }else if(inputP.val().length >= 12 && upperCasePresent >= 1 && numberPresent > 1){
      $('.medium').show();
      $('.strong').show();
      $("#signup").attr("disabled", false);

    }

    // Resetting parameters
  numberPresent = 0;
  upperCasePresent = 0;
  
 }