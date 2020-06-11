import $ from "jquery";


export const cartItemNumber = () => {

  let roomNum = 0;
  let treatNum = 0;
  let total = 0;
  
  roomNum = $(".room-list li").length;
  treatNum = $(".treat-list li").length;

  total = roomNum + treatNum;

  $("#cart-number").text(`${total}`)


}
