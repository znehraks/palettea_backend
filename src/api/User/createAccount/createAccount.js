import bcrypt from "bcryptjs";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { userName, email, password, address1, address2 } = args;

      const hashedPassword = await bcrypt.hash(password, 10);

      const exists = await prisma.$exists.user({
        email
      });
      if (exists) {
        return false;
      }

      await prisma.createUser({
        userName,
        email,
        password: hashedPassword,
        address1,
        address2
      });
      return true;
    }
  }
};
