let reg_form = document.querySelector(".register-form");
if (reg_form != null) {
    reg_form.addEventListener("submit", (e) => {
      //  PREVENT THE DEFAULT ACTION OF THE FORM
      e.preventDefault();
  
      //  CREATE AN OBJECT CONTAINING ALL THE INPUTS VALUES
      console.log(document.getElementById("email"))
      let new_user = {
        name: document.querySelector("#fullname").value,
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
      };
  
      console.log(new_user);
  
      fetch("https://ftial-eomp.herokuapp.com/registration/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_user)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if(data.status_code == 201) {
            let user = data.user;
            localStorage.setItem("user", JSON.stringify(user));
            alert("successful registration for hitachi")
            window.location.href ="./products.html";
          } else {
            alert("unsuccessful registration")
            
          }
         
        });
    });
  }