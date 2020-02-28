import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addBase: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { baseName } = args;
      await prisma.createBase({
        baseName
      });
      return true;
    }
  }
};
