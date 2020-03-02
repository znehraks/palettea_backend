import { prisma } from "../../../../generated/prisma-client";
import { isAdm } from "../../../middlewares";

export default {
  Mutation: {
    editProductCategory: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { productCategoryCode, productCategoryName, productCode } = args;
      await prisma.updateProductCategory({
        where: {
          productCategoryCode
        },
        data: {
          productCategoryName,
          product: {
            connect: {
              productCode
            }
          }
        }
      });
      return true;
    }
  }
};
