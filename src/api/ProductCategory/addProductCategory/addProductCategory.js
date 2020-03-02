import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addProductCategory: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { productCategoryCode, productCategoryName } = args;
      await prisma.createProductCategory({
        productCategoryCode,
        productCategoryName
      });
      return true;
    }
  }
};
