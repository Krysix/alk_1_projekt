import $ from "jquery";


export function passStrength(){
  let inputP = $('#password');
  
  let upperCasePresent = 0;
  let numberPresent = 0;
  
  let i=0;
  let character='';
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
    
  if(inputP.val().length===0){
    $('.weak').hide();
    $('.medium').hide();
    $('.strong').hide();
    $('#strength-text').hide();

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

  numberPresent = 0;
  upperCasePresent = 0;
  
 }