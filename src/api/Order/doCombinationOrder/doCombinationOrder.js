import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    doCombinationOrder: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { combinationCode, quantity } = args;

      await prisma.createOrder({
        orderUser: {
          connect: {
            email: user.email
          }
        },
        orderCombination: {
          connect: {
            combinationCode
          }
        },
        quantity
      });
      return true;
    }
  }
};
