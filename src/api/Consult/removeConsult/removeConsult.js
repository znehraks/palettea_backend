import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    removeConsult: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { consultId } = args;
      await prisma.deleteConsult({
        id: consultId
      });
      return true;
    }
  }
};
