import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editQuestionTitle: async (_, args, { request, isAdm }) => {
      isAdm(request);
      var { questionTitleCode, questionTitleName } = args;
      await prisma.updateQuestionTitle({
        where: { questionTitleCode },
        data: { questionTitleName }
      });
      return true;
    }
  }
};
