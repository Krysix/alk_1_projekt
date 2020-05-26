
import $ from "jquery";

export function handleRegister(e) {
  let email = $('#email').val();
  let password = $('#password').val();
  let newUser = true;

  fetch(`http://localhost:3000/users`)
    .then((response) => response.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          newUser = false;
        }
      }
    
      if (newUser === true) {
        fetch(`http://localhost:3000/users`, {
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
        alert('Email is already registered')
      }

    })
    .catch(error => console.log("Error ...", error));
  e.preventDefault();
}