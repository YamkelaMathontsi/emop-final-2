let signInButton = document.querySelector(".login-form");

function login(username, password) {
  console.log(username);
  console.log(password);
  fetch("https://still-ocean-71718.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        window.location.href = "./scripts/products.html";
      }
    });
}

document.querySelector(".login-form").addEventListener("submit", (e) => {
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  e.preventDefault();
  login(username, password);
});