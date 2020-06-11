import $ from "jquery";

export function setInitialDate(){

  let date = new Date();
  let today = date.getFullYear() + '-'
          + ('0' + (date.getMonth()+1)).slice(-2) + '-'
          + ('0' + date.getDate()).slice(-2);

  
  date.setDate(date.getDate() + 1);
  
  let tomorrow = date.getFullYear() + '-'
          + ('0' + (date.getMonth()+1)).slice(-2) + '-'
          + ('0' + date.getDate()).slice(-2);
  
  return [today, tomorrow];
}