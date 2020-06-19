// Function for displaying main page content

import $ from "jquery";

export function displayHomePage() {
  $('.img-prev').show();
  $('.slider-buttons').show();
  $('.offer').show();
  $('.info-main').show();

  // Changing navabar style to display which page we are on
  $('.navbar-nav li:eq(0)').css('color', '#b37436');
  $('.navbar-nav li:eq(1)').css('color', '#202020');
  $('.navbar-nav li:eq(2)').css('color', '#202020');
  $('.navbar-nav li:eq(3)').css('color', '#202020');

}