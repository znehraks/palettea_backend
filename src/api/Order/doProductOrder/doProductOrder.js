import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    doProductOrder: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { productCode, quantity } = args;

      await prisma.createOrder({
        orderUser: {
          connect: {
            email: user.email
          }
        },
        orderProduct: {
          connect: {
            productCode
          }
        },
        quantity
      });
      return true;
    }
  }
};
