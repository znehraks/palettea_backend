import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeCombination: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { combinationCode } = args;
      await prisma.deleteCombination({ combinationCode });
      return true;
    }
  }
};
