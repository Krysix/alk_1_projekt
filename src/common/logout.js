// Function enebling logout functionality throught Log out button

import $ from "jquery";

export function handleLogout(e) {
  let passwordId = 0;
  let process = false;
  let getI = 0;

  // Looking for user who is logged in
  fetch(`https://alk-fake-api.herokuapp.com/users`)
    .then((response) => response.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].loggedin === "true") {
          process = true;
          passwordId = users[i].id;
          getI = i;
        };
      }

      // Removing logged in status from particular user
      if (process === true) {
        fetch(`https://alk-fake-api.herokuapp.com/users${passwordId}`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            id: `${passwordId}`,
            email: `${users[getI].email}`,
            password: `${users[getI].password}`,
            loggedin: `false`
          })

        });

        // After logous change window to home
        window.location.replace("http://localhost:1234/");
      } 
    })
    .catch(error => console.log("Error ...", error));
  e.preventDefault();
}