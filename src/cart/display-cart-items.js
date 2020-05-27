import $ from "jquery";
import { Cart } from "./index";
import { removeCartItem } from "./index";

export const displayCart = () => {
  // Define a new cart
  let cart = new Cart();

  let cartCookies = cart.getItSpaCart()

  $(".cart-list").empty();
  $(".price-tag").empty();
  let sumPrice = 0;
  

  for(let i = 0; i< cartCookies.length; i++) {
    let priceNumber = cartCookies[i].price
    let noDolarSign = parseInt(priceNumber.substring(0, priceNumber.length - 1));
    sumPrice = sumPrice + noDolarSign;
    $(".cart-list").append(`
    <li>  
      <span>${cartCookies[i].name}</span> 
      <span class="price"> ${noDolarSign} $</span> 
      <span class="remove-btn"> <i class="fas fa-trash-alt"></i></span>
    </li>
    `);
  };

  let button = $(".remove-btn");
  button.on('click', function (e) {
    removeCartItem(e);
  });


  $(".price-tag").append(`
    <span class="cart-header"> Total Cost: ${sumPrice} $ </span> 
  `)
}