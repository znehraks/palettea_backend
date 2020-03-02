import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addQuestion: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const {
        questionCode,
        questionNumber,
        questionTitleCode,
        questionAnswerCodes
      } = args;
      await prisma.createQuestion({
        questionCode,
        questionNumber,
        questionTitle: {
          connect: {
            questionTitleCode
          }
        }
      });
      questionAnswerCodes.forEach(async code => {
        await prisma.updateQuestion({
          where: { questionCode },
          data: {
            questionAnswer: {
              connect: {
                questionAnswerCode: code
              }
            }
          }
        });
      });
      return true;
    }
  }
};
