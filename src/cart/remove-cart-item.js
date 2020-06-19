import $ from "jquery";
import { Cart } from "./index";
import { displayCart } from "./index";

export const removeCartItem = (e) => {
  // Define a new cart
  let cart = new Cart();

  // Getting name of item we want to remove
  let item = $(e.target).parent().parent().find("span").eq(0).text();
  let cartItem = item.substring(0,item.length - 1)

  // Removing item from the cart
  cart.remove({
    name: cartItem
  });

  // Displaying cart
  displayCart();

  e.preventDefault()
}