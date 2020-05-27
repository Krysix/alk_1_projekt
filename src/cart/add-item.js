import $ from "jquery";
import { Cart } from "./index";
import { displayCart } from "./display-cart-items"

export const addItemToCart = (e) => {
  // Define a new cart
  let cart = new Cart();

  let roomName = $(e.target).parent().find("ul li").eq(0).text();
  let roomTextPrice = $(e.target).parent().find("ul li").eq(3).text();
  let roomPrice = roomTextPrice.substring(8, roomTextPrice.length);

  cart.add({
    name: roomName,
    price: roomPrice
  })

  displayCart();
  
  e.preventDefault()
}