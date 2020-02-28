import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeCombination: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { code } = args;
      await prisma.deleteCombination({ code });
      return true;
    }
  }
};
