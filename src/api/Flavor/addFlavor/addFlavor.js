import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addFlavor: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { flavorName } = args;
      await prisma.createFlavor({
        flavorName
      });
      return true;
    }
  }
};
