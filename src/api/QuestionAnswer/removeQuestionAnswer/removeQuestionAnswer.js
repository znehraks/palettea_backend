import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeQuestionAnswer: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { questionAnswerCode } = args;
      await prisma.deleteQuestionAnswer({ questionAnswerCode });
      return true;
    }
  }
};
