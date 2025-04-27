import jwt from "jsonwebtoken";

// Crear un token
const token = jwt.sign({ userId: 123 }, "tu_secreto", { expiresIn: "1h" });
console.log(token);

// Verificar un token
jwt.verify(token, "tu_secreto", (err, decoded) => {
  if (err) {
    console.log("Token inválido");
  } else {
    console.log("Token válido", decoded);
  }
});
