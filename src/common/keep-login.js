
import $ from "jquery";

export function keepLogin() {
  let process = false;
  let getI;

  fetch(`http://localhost:3000/users`)
    .then((response) => response.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].loggedin === 'true') {
          process = true;
          getI = i;
          $('.btn-to-buy').prop("disabled", false);
        };
      }
      if(process === true) {
        
        if($('#link-Login').length) {
        $('#link-Login').remove();
        $('ul li').eq(4).append(`<button class="LoginDummy">${users[getI].email}</button>`);
        }

        if($('#link-Register').length) {
          $('#link-Register').remove();
          $('ul li').eq(5).append(`<button class="logoutBtn">Log Out</button>`);
        }
      }    
  })
  .catch(error => console.log("Error ...", error));
}