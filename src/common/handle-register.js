// Function for handling registering

import $ from "jquery";
import modalText from "./index";

export function handleRegister(e) {
  let email = $('#email').val();
  let password = $('#password').val();
  let newUser = true;

  // Checking if input email is new user
  fetch(`https://alk-fake-api.herokuapp.com/users`)
    .then((response) => response.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          newUser = false;
        }
      }
      
      // Adding new user to the datebase
      if (newUser === true) {
        fetch(`https://alk-fake-api.herokuapp.com/users`, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            id: `${users.length + 1}`,
            email: `${email}`,
            password: `${password}`,
            loggedin: `false`
          })
        });
      } else {
        // Displaying modal message
        modalText('Email is already registered');
      }

    })
    .catch(error => console.log("Error ...", error));
  e.preventDefault();
}