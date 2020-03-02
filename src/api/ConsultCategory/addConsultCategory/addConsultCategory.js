import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addConsultCategory: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { consultCategoryCode, consultCategoryName } = args;
      await prisma.createConsultCategory({
        consultCategoryCode,
        consultCategoryName
      });
      return true;
    }
  }
};
