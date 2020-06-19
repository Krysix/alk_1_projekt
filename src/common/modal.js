// Adding modal which takes inside text as parameter
// To hide modal clicking ok is required

import $ from "jquery";

export function modalText(text) {
  let modalBtn = $('.modal button');
  let modalBg = $('.modal-bg');

  modalBg.addClass('bg-active');

  modalBtn.on('click', function () {
    modalBg.removeClass('bg-active');
  })
  $('#alert').text(text);

}