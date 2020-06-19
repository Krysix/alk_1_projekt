// Function responsible for adding treatment to cart

import $ from "jquery";
import { Cart } from "./index";
import { displayCart } from "./display-cart-items";

export const addTreatToCart = (e) => {
  // Define a new cart
  let cart = new Cart();

  // Scraping name and price from a specific treatment 
  let treatName = $(e.target).parent().find("ul li").eq(0).text();
  let treatTextPrice = $(e.target).parent().find("ul li").eq(3).text();
  let treatPrice = treatTextPrice.substring(8, treatTextPrice.length);
  let srcString = $(e.target).parent().parent().find("img").attr('src');

  // Adding item to cart
  cart.add({
    name: treatName,
    price: treatPrice,
    type: 'treatment',
    imgSrc: srcString
  })

  // Displaying cart with new added item
  displayCart();
  
  e.preventDefault()
}