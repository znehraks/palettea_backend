import { prisma } from "../../../../generated/prisma-client";
import { isAdm } from "../../../middlewares";

export default {
  Mutation: {
    editProduct: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const {
        productCode,
        productName,
        productCategoryCode,
        productCost,
        productStock,
        productSaleCount
      } = args;
      await prisma.updateProduct({
        where: { productCode },
        data: {
          productName,
          productCategory: {
            connect: {
              productCategoryCode
            }
          },
          productCost,
          productStock,
          productSaleCount
        }
      });
      return true;
    }
  }
};
