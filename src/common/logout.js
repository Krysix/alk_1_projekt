import $ from "jquery";

export function handleLogout(e) {
  let passwordId = 0;
  let process = false;
  let getI = 0;

  fetch(`http://localhost:3000/users`)
    .then((response) => response.json())
    .then((users) => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].loggedin === "true") {
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
            loggedin: `false`
          })

        });

        window.location.replace("http://localhost:1234/");
      } 
    })
    .catch(error => console.log("Error ...", error));
  e.preventDefault();
}