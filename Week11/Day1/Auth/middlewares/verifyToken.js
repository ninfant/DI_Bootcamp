import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.cookies["token"];
  if (!token) {
    res.status(404).json({ message: "Unauthorired user" });
    return;
  }
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(404).json({ message: "Forbidden user" });
      return;
    }
    console.log(decoded);
    next();
  });
};

export default verifyToken;
