const express = require("express");

const app = express();

app.use(express.json()); // this is for the body parser  to get what is in the body

//--------------------------//
// this is to working with the directory public using html files, sending html
console.log(__dirname);
app.use("/", express.static(__dirname + "/public"));
//--------------------------//
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
// CRUD
//Create - POST
//Read- GET
//Update - PUT
//Delete - DELETE

// app.get;
// app.post;
// app.put;
// app.delete;

// app.get("/api/users", (req, res) => {
//   res.send("Hello from my  first server");
// });

const users = [
  { id: 1, name: "Jonh", email: "nnn@gmsil.com" },
  { id: 2, name: "Noi", email: "nnn@gmsil.com" },
  { id: 3, name: "Tom", email: "nnn@gmsil.com" },
];
/**
 * D - Delete - delete
 */
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params; // to get what is in the parameters
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: "user to update not foun " });
    return;
  }
  users.splice(index, 1);
  res.json(users);
});

/**
 * U - Update - PUT
 */
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params; // to get what is in the parameters
  const { name, email } = req.body;
  const index = users.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: "user to update not foun " });
    return;
  }
  users[index] = { ...users[index], name, email };
  res.json(users);
});

/**
 * C - Create - POST
 */
app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { name, email } = req.body; // to get what is in the body i declared up this: app.use(express.json());
  const newUser = { name, email, id: users.length + 1 }; // los datos de este newUser lo pase alla en el body del postman
  users.push(newUser);
  res.json(users);
});

/**
 * Read- GET
 */
app.get("/api/users", (req, res) => {
  res.json(users);
});

/**
 * R- Read- GET one user with params(dinamico) ------ Read params----
 */
app.get("/api/users/:id/", (req, res) => {
  ///api/users/:id/:name
  console.log(req.params);
  const { id } = req.params; // to get a parameters
  const user = users.find((item) => item.id == id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
    // return res.sendStatus(401);
  }
  res.json(user); // send a responde
});

/**
 *R - Read get user by name query
 */
app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query; // to get a query
  const filterUsers = users.filter((item) => {
    return item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
  });
  if (filterUsers.length === 0) {
    res.status(404).json({ message: "no user match your search!!" });
    return;
  }
  res.json(filterUsers); // send a responde
});
