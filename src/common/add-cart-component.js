import $ from "jquery";

export function addCart() {
    
  if($('.navbar-nav li').length < 7) {
    $('.navbar-nav').append(`
    <li> 
      <div class="cart-dropdown"> 
        <button id="cart-button">
          <i class="fas fa-shopping-cart"></i>
        </button>
        <div class="cart-content">
        <span class="cart-header">Your cart:</span>
          <ul class="cart-list">
          </ul>
          <div class="price-tag">
          </div>
          <button class="btn btn-to-buy"> Go to payment</button>
        </div>
      </div>
    
    </li>`);
  }

}