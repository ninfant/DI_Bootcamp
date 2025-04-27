import { db } from "../config/db.js";
import bcrypt from "bcrypt";

const userModel = {
  createUser: async (password, email) => {
    const trx = await db.transaction();

    try {
      const hashPassword = await bcrypt.hash(password + "", 10);
      const [user] = await trx("users").insert(
        {
          email: email.toLowerCase(),
          password: hashPassword,
        },
        ["email", "id"] // quiero retornar esto
      );
      await trx.commit();
      return user;
    } catch (error) {
      await trx.rollback();
      console.log(error);
      throw error;
    }
  },
  getUserByEmail: async (email) => {
    try {
      const user = await db("users")
        .select("id", "email", "password")
        .where({ email: email.toLowerCase() })
        .first();
      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default userModel;
