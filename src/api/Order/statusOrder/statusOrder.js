import { prisma } from "../../../../generated/prisma-client";
import { isAdm } from "../../../middlewares";

export default {
  Mutation: {
    statusOrder: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { orderId, status } = args;
      await prisma.updateOrder({
        where: { id: orderId },
        data: {
          status
        }
      });
      return true;
    }
  }
};
