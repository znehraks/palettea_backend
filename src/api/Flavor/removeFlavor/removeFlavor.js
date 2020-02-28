import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeFlavor: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { flavorName } = args;
      await prisma.deleteFlavor({ flavorName });
      return true;
    }
  }
};
