// Function for sending cart content to the owners mail. Used EmailJS.

import $ from "jquery";
import { modalText } from "../common/index";

export const sendOrder = (e) => {

  // Getting parameters for email
  let roomList = $(".room-list").text();
  let daysTag = $(".days-tag").text();
  let treatList = $(".treat-list").text();
  let priceTag = $(".price-tag").text();
  let loginDummy = $(".LoginDummy").text();
  let arrival = localStorage.getItem('arrival');
  let departure = localStorage.getItem('departure');

  // Setting necessary parameters for sending an email. Needs to be configured with https://www.emailjs.com/ configuration panel
  let data = {
    service_id: 'gmail',
    template_id: 'template_2loBGN78',
    user_id: 'user_ns7iHh78yO9LtgyLwZeVS',
    template_params: {
        'to_name': 'Krystian',
        'from_name': `${loginDummy}`,
        'room_list': `${roomList}`,
        'days_tag': `${daysTag}, ${arrival}, ${departure}`,
        'treat_list': `${treatList}`,
        'price_tag': `${priceTag}`
    }
  };

  // Posting mail content to Emailjs

  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
  }).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  });

  // Displaying modal with text
  modalText("We've got Your oder. See You soon!");

  e.preventDefault()
}