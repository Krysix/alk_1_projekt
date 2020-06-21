// Function for keeping displaying login user through all pages

import $ from "jquery";

export function keepLogin() {

  // Setting initial parameters
  let process = false;
  let getI;

  // Looking for loggedin = true; parameter. If found enable "Go to payment" option.
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

      // Append new buttons to the navbar with login email and logout option.
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