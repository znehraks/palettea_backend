import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeProductCategory: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { productCategoryCode } = args;
      await prisma.deleteProductCategory({ productCategoryCode });
      return true;
    }
  }
};
