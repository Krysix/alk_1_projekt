// Function for displaing date in the Bookings component

import $ from "jquery";
import {setInitialDate} from "./set-initial-date";
import { displayCart } from "../cart/display-cart-items";

export function displayDate() {

  // Setting initial date 
  setInitialDate();
  let initialDates = setInitialDate();
  let today = initialDates[0];
  let tomorrow = initialDates[1];

  // Forcing calendar dates to today and tomorrow respectively
  $(`#arrival`).attr("min", today).attr("value", today);
  $(`#departure`).attr("min", tomorrow).attr("value", tomorrow);

  let keepArrivalDate = new Date();

  // Standard display 1 day
  $('#visitDays').text(`1`);

  // Setting departure calendar on arrival date + 1 day
  $('#arrival').on("change", function () {
    let arrivalDate = $('#arrival').val();
    let date = new Date(arrivalDate);
    keepArrivalDate = date;
    date.setDate(date.getDate() + 1);
    let newTomorrow = date.getFullYear() + '-'
    + ('0' + (date.getMonth()+1)).slice(-2) + '-'
    + ('0' + date.getDate()).slice(-2);
    $(`#departure`).attr("value", newTomorrow).attr("min", newTomorrow);
  });
  
  // Calculating and displaying days difference between both calendars
  $('#departure').on("change", function () {
    let departureDate = $('#departure').val();
    let keepDepartureDate = new Date(departureDate);
    let dayDifference = (keepDepartureDate.getTime() - keepArrivalDate.getTime())/ (1000*60*60*24) +1 ;
    
    let dayDifferenceFixed = dayDifference.toFixed(0);

    $('#visitDays').text(`${dayDifferenceFixed}`);

    // Displaying both carts
    displayCart();
  });


  // Displaying booking component
  $('.booking-card').show();
}