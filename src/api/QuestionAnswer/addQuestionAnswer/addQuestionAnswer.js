import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addQuestionAnswer: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { questionAnswerCode, questionAnswerName } = args;
      await prisma.createQuestionAnswer({
        questionAnswerCode,
        questionAnswerName
      });
      return true;
    }
  }
};
