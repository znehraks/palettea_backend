import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeQuestion: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { questionCode } = args;
      await prisma.deleteQuestion({ questionCode });
      return true;
    }
  }
};
