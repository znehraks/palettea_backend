import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    connectAnswer: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { questionCode, questionAnswerCode } = args;
      await prisma.updateQuestion({
        where: { questionCode },
        data: {
          questionAnswer: {
            connect: {
              questionAnswerCode
            }
          }
        }
      });
      return true;
    }
  }
};
