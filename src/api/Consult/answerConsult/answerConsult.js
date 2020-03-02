import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    answerConsult: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { consultId, consultAnswer } = args;
      await prisma.updateConsult({
        where: {
          id: consultId
        },
        data: {
          consultAnswer
        }
      });
      return true;
    }
  }
};
