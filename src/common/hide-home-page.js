// funkcja do ukrycia zawartości strony głównej

import $ from "jquery";

export function hideHomePage() {
  $('.img-prev').hide();
  $('.slider-buttons').hide();
  $('.offer').hide();
  $('.info-main').hide();

}