import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editBase: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { base, stock } = args;
      if (base !== null) {
        await prisma.updateMaterial({
          where: { base },
          data: { stock }
        });
      }
      return true;
    }
  }
};
