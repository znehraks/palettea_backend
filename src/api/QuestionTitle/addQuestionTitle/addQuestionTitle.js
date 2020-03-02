import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addQuestionTitle: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { questionTitleCode, questionTitleName } = args;
      await prisma.createQuestionTitle({
        questionTitleCode,
        questionTitleName
      });
      return true;
    }
  }
};
