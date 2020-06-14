import $ from "jquery";
import { modalText } from "../common/index";

export const sendOrder = (e) => {

  let roomList = $(".room-list").text();
  let daysTag = $(".days-tag").text();
  let treatList = $(".treat-list").text();
  let priceTag = $(".price-tag").text();
  let loginDummy = $(".LoginDummy").text();
  let arrival = localStorage.getItem('arrival');
  let departure = localStorage.getItem('departure');

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

  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
  }).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  });

  modalText("We've got Your oder. See You soon!");

  e.preventDefault()
}