// HTML element for cart component

import $ from "jquery";

export function addCart() {

  if($('.navbar-nav').children().length < 8) {
    $('.navbar-nav').append(`
    <li> 
      <div class="cart-dropdown"> 
        <button id="cart-button">
          <i class="fas fa-shopping-cart"></i>
          <span id="cart-number"></span>
        </button>
        <div class="cart-content">
        <span class="cart-header">Your cart:</span>
          <ul class="room-list">
          </ul>
          <div class="days-tag">
          <span></span>
          </div>
          <ul class="treat-list">
          </ul>
          <div class="price-tag">
          </div>
          <button class="btn btn-to-buy" disabled> Go to payment</button>
        </div>
      </div>
    
    </li>`);
  }

}