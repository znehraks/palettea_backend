import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addProduct: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { productName, productCategory, productCost, productStock } = args;
      const product = await prisma.createProduct({
        productName,
        productCategory,
        productCost,
        productStock
      });
      return true;
    }
  }
};
