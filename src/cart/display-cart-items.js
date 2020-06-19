// Function for reading cart items from cookies and appending them to the cart

import $ from "jquery";
import { Cart } from "./index";
import { removeCartItem } from "./index";
import { cartItemNumber } from "./index";
import { sendOrder } from "./index";

export const displayCart = () => {
  // Define a new cart
  let cart = new Cart();
  // Getting cart items from cookies
  let cartCookies = cart.getItSpaCart()

  // Removing past cart items
  $(".room-list").empty();
  $(".treat-list").empty();
  $(".price-tag").empty();
  let sumPrice = 0;
  let days = localStorage.getItem('days');

  // Loop for appending rooms and treatments to the cart component
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
      sumPrice = sumPrice + (noDolarSign * days);
      console.log(days);

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

  // Hides unnecesary items when cart is empty
  if($(".room-list li").length < 1){
    $(".days-tag span").hide();
    if($(".treat-list li").length < 1) {
      $("#cart-number").hide();
    } else {
      $("#cart-number").show();
    } ;
  }else {
    $("#cart-number").show();
    $(".days-tag span").show();
    $(".days-tag span").text(`x ${days} days`);
  };


  // Button from removing item from the cart
  let button = $(".remove-btn");
  button.on('click', function (e) {
    removeCartItem(e);
  });

  // Button for collecting order and sending cart content to email
  let sendMail = $(".btn-to-buy");
  sendMail.on('click', function (e) {
    sendOrder(e);
  });

  // Adding price tag to the cart component
  $(".price-tag").append(`
    <span class="cart-header"> Total Cost: ${sumPrice} $ </span> 
  `)

  cartItemNumber();
}