import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editQuestionAnswer: async (_, args, { request, isAdm }) => {
      isAdm(request);
      var { questionAnswerCode, questionAnswerName } = args;
      await prisma.updateQuestionAnswer({
        where: { questionAnswerCode },
        data: { questionAnswerName }
      });
      return true;
    }
  }
};
