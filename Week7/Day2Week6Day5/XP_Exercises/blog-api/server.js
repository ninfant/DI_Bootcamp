// In server.js, require the express package and set up an Express app.
const express = require("express");
const app = express();
app.use(express.json()); // this is for the body parser  to get what is in the body

const PORT = 3001;
// start the server
app.listen(PORT, () => {
  console.log(`Run on ${PORT} port`);
});

// simulated database: an array of blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding Node.js",
    content:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to run on the server side.",
  },
  {
    id: 2,
    title: "Introduction to Express.js",
    content:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features.",
  },
  {
    id: 3,
    title: "JavaScript Async/Await Explained",
    content:
      "Async/Await makes asynchronous JavaScript easier to read and write by allowing us to work with promises in a synchronous-looking way.",
  },
];

// Implement the following routes using Express:
// GET /blogs: Return a list of all blog posts.

// this is the "Read all" route
// myNotes: in postman i used http://localhost:3001/api/blogs/
app.get("/api/blogs", (req, res) => {
  res.json(blogPosts); // here send blogPosts array as JSON
});

// GET /blogs/:id: Return a specific blog post based on its id.
app.get("/api/blogs/:id", (req, res) => {
  const { id } = req.params; // to get a parameters
  const findBlogsPost = blogPosts.find((item) => item.id == id);
  if (!findBlogsPost) {
    return res.status(404).json({ message: "blog post not found" });
    // return res.sendStatus(401);
  }
  res.json(findBlogsPost);
});
// POST /posts: Create a new blog post.
app.post("/api/blogs/", (req, res) => {
  const { title, content } = req.body; // to get what is in the body i declared up this: app.use(express.json());
  const newBlogPost = { id: blogPosts.length + 1, title, content }; // los datos de este newUser lo pase alla en el body del postman
  blogPosts.push(newBlogPost);
  res.json(blogPosts);
});
//myNotes: In postman I entered in the body the title and content, so i could push the new blog post

// PUT /posts/:id: Update an existing blog post.
app.put("/api/blogs/:id", (req, res) => {
  const { id } = req.params; // to get what is in the parameters
  const { title, content } = req.body;
  const index = blogPosts.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: "blog post to update not foun " });
    return;
  }
  blogPosts[index] = { ...blogPosts[index], title, content };
  res.json(blogPosts);
});
//myNotes: In postman I entered in the body the title or content changes so i could get the changes for the new blog post

// DELETE /posts/:id: Delete a blog post.
app.delete("/api/blogs/:id", (req, res) => {
  const { id } = req.params; // to get what is in the parameters
  const index = blogPosts.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: "blog post to update not foun " });
    return;
  }
  blogPosts.splice(index, 1);
  res.json(blogPosts);
});
