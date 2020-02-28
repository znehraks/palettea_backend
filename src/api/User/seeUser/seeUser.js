import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: async (_, args) => {
      const { email } = args;
      return prisma.user({email: email});
    }
  }
};
