import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addProduct: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const {
        productCode,
        productName,
        productCategoryCode,
        productCost,
        productStock
      } = args;
      await prisma.createProduct({
        productCode,
        productName,
        productCategory: {
          connect: {
            productCategoryCode
          }
        },
        productCost,
        productStock
      });
      return true;
    }
  }
};
