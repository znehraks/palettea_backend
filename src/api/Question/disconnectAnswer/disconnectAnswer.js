import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    disconnectAnswer: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { questionCode, questionAnswerCode } = args;
      await prisma.updateQuestion({
        where: { questionCode },
        data: {
          questionAnswer: {
            disconnect: {
              questionAnswerCode
            }
          }
        }
      });
      return true;
    }
  }
};
