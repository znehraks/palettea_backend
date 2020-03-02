import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeConsultCategory: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { consultCategoryCode } = args;
      await prisma.deleteConsultCategory({ consultCategoryCode });
      return true;
    }
  }
};
