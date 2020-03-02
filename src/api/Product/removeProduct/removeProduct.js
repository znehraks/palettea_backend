import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeProduct: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { productCode } = args;
      await prisma.deleteProduct({ productCode });
      return true;
    }
  }
};
