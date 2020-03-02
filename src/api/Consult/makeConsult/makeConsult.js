import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    makeConsult: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { consultCategoryCode, consultTitle, consultContent } = args;
      await prisma.createConsult({
        consultCategory: {
          connect: {
            consultCategoryCode
          }
        },
        consultTitle,
        consultContent
      });
      return true;
    }
  }
};
