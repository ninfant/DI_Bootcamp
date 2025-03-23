document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("register.html")) {
    document
      .getElementById("registerBtn")
      .addEventListener("click", async () => {
        const user = {
          firstname: document.getElementById("firstName").value,
          lastname: document.getElementById("lastName").value,
          email: document.getElementById("email").value,
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
        };

        //call the backend using fetch() para hacer una solicitud HTTP, await esperá hasta que el servidor me responda
        const res = await fetch("/users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" }, //le dices al serv q lo q le mandas es un json
          body: JSON.stringify(user), // JSON.stringify() lo convierte a texto plano JSON (lo que el servidor espera en el req.body)
        });

        const data = await res.json(); //data es un objeto JS con el contenido que el servidor te devolvió.
        alert(data.message || data.error);
      });
  } else if (window.location.pathname.endsWith("login.html")) {
    document.getElementById("loginBtn").addEventListener("click", async () => {
      const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      };

      const res = await fetch("/users/login", {
        method: "POST", // Usás el método POST, porque vas a enviar datos al servidor (para hacer login).
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      alert(data.message || data.error);
    });
  }
});
