import { prisma } from "../../../../generated/prisma-client";
import { isAdm } from "../../../middlewares";

export default {
  Mutation: {
    editConsultCategory: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { consultCategoryCode, consultCategoryName, consultId } = args;
      await prisma.updateProductCategory({
        where: {
          consultCategoryCode
        },
        data: {
          consultCategoryName,
          consult: {
            connect: {
              id: consultId
            }
          }
        }
      });
      return true;
    }
  }
};
