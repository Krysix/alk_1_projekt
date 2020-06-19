// Function for handling login in

import $ from "jquery";
import { modalText } from "../common/index";

export function handleLogin(e) {
  let email = $('#emailL').val();
  let password = $('#passwordL').val();
  let passwordId = 0;
  let process = false;
  let getI = 0;

  // Checking if login and password are correct and existing inside datebase.json
  fetch(`https://alk-fake-api.herokuapp.com/users`)
    .then((response) => response.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          process = true;
          passwordId = users[i].id;
          getI = i;
        };

      }
      // Find user in datebase and change his status to "loggedin: true"
      if (process === true) {
        fetch(`https://alk-fake-api.herokuapp.com/users/${passwordId}`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            id: `${passwordId}`,
            email: `${users[getI].email}`,
            password: `${users[getI].password}`,
            loggedin: `true`
          })

        });
       
        // Redirect to home page
        window.location.replace("http://localhost:1234");
        
      } else {
        // Display error message 
        modalText("Wrong login or password");
        $('#emailL').val('') ;
        $('#passwordL').val('');
      }

    })
    .catch(error => console.log("Error ...", error));

  e.preventDefault();
}