import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editFlavor: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { flavor, stock } = args;
      if (flavor !== null) {
        await prisma.updateMaterial({
          where: { flavor },
          data: { stock }
        });
      }
      return true;
    }
  }
};
