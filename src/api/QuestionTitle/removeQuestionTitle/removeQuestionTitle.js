import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeQuestionTitle: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { questionTitleCode } = args;
      await prisma.deleteQuestionTitle({ questionTitleCode });
      return true;
    }
  }
};
