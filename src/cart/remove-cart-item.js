import $ from "jquery";
import { Cart } from "./index";
import { displayCart } from "./index";

export const removeCartItem = (e) => {
  // Define a new cart
  let cart = new Cart();
  let item = $(e.target).parent().parent().find("span").eq(0).text();
  let cartItem = item.substring(0,item.length - 1)
  cart.remove({
    name: cartItem
  });
  displayCart();

  e.preventDefault()
}