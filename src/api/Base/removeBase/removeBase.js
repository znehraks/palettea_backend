import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeBase: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { baseName } = args;
      await prisma.deleteBase({ baseName });
      return true;
    }
  }
};
