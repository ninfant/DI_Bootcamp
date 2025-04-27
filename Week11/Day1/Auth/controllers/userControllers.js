import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  registerUser: async (req, res) => {
    const { password, email } = req.body;
    try {
      const user = await userModel.createUser(password, email);
      res.status(201).json({
        message: "user reg succ",
        user,
      });
    } catch (error) {
      console.log(error);
      if (error.code === "23505") {
        res.status(404).json({ message: "User already exist " }); // ✅ manejar duplicados
        return; // ✅ evitar enviar doble respuesta
      }
      res.status(500).json({ message: "Internal server error " });
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.getUserByEmail(email); // ✅ buscar usuario por email
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const match = await bcrypt.compare(password + "", user.password); // ✅ comparar contraseñas
      if (!match) {
        res.status(404).json({ message: "wrong passwords" }); // ✅ mantener nota
        return;
      }

      const { ACCESS_TOKEN_SECRET } = process.env.ACCESS_TOKEN_SECRET; // ✅

      /** Generate token */
      const accesstoken = jwt.sign(
        {
          userid: user.id,
          email: user.email,
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: "60s" } // ✅ duración del token
      );

      /**What to do with this token:
       * set token on httpOnly cookie
       */
      res.cookie("token", accesstoken, {
        maxAge: 60 * 1000,
        httpOnly: true,
      });

      /** Response to de user with the token */
      res.status(200).json({
        message: "login successfuly",
        user: { userid: user.id, email: user.email, status: "active" },
        token: accesstoken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error " });
    }
  },
};

export default userController;
