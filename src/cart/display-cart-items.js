import $ from "jquery";
import { Cart } from "./index";
import { removeCartItem } from "./index";
import { cartItemNumber } from "./index";
import { sendOrder } from "./index";

export const displayCart = () => {
  // Define a new cart
  let cart = new Cart();

  let cartCookies = cart.getItSpaCart()

  $(".room-list").empty();
  $(".treat-list").empty();
  $(".price-tag").empty();
  let sumPrice = 0;
  let days = localStorage.getItem('days');


  for(let i = 0; i< cartCookies.length; i++) {
    let priceNumber = cartCookies[i].price
    let noDolarSign = parseInt(priceNumber.substring(0, priceNumber.length - 1));
    
    let type = cartCookies[i].type;
    if(type == 'room') {
      $(".room-list").append(`
      <li>  
        <img class="cart-image" src='${cartCookies[i].imgSrc}'> 
        <span>${cartCookies[i].name}:</span> 
        <span class="price"> ${noDolarSign}$</span> 
        <span class="remove-btn"> <i class="fas fa-trash-alt"></i></span>
      </li>
      `);
      sumPrice = sumPrice + (noDolarSign * days[0]);

    } else {
      $(".treat-list").append(`
      <li>  
        <img class="cart-image" src='${cartCookies[i].imgSrc}'>
        <span>${cartCookies[i].name}:</span> 
        <span class="price"> ${noDolarSign} $</span> 
        <span class="remove-btn"> <i class="fas fa-trash-alt"></i></span>
      </li>
      `);

      sumPrice = sumPrice + noDolarSign;
    }
  };

  if($(".room-list li").length < 1){
    $(".days-tag span").hide()
  }else {
    $(".days-tag span").show()
    $(".days-tag span").text(`x ${days} days`);
  };

  let button = $(".remove-btn");
  button.on('click', function (e) {
    removeCartItem(e);
  });

  let sendMail = $(".btn-to-buy");
  sendMail.on('click', function (e) {
    sendOrder(e);
  });


  $(".price-tag").append(`
    <span class="cart-header"> Total Cost: ${sumPrice} $ </span> 
  `)

  cartItemNumber();
}