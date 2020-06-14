
import $ from "jquery";
import { modalText } from "../common/index";

export function handleLogin(e) {
  let email = $('#emailL').val();
  let password = $('#passwordL').val();
  let passwordId = 0;
  let process = false;
  let getI = 0;

  fetch(`http://localhost:3000/users`)
    .then((response) => response.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          process = true;
          passwordId = users[i].id;
          getI = i;
        };

      }
      if (process === true) {
        fetch(`http://localhost:3000/users/${passwordId}`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            id: `${passwordId}`,
            email: `${users[getI].email}`,
            password: `${users[getI].password}`,
            loggedin: `true`
          })

        });

        $('#emailL').val('');
        $('#passwordL').val('');
        
        window.location.replace("http://localhost:1234");
        
      } else {
        modalText("Wrong login or password");
        $('#emailL').val('') ;
        $('#passwordL').val('');
      }

    })
    .catch(error => console.log("Error ...", error));

  e.preventDefault();
}