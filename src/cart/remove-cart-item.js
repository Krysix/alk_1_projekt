import $ from "jquery";
import { Cart } from "./index";
import { displayCart } from "./index";

export const removeCartItem = (e) => {
  // Define a new cart
  let cart = new Cart();
  let cartItem = $(e.target).parent().parent().find("span").eq(0).text();

  cart.remove({
    name: cartItem
  });
  displayCart();

  e.preventDefault()
}