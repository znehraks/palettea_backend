import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addMaterial: async (_, args, { request, isAdm }) => {
      isAdm(request);
      const { base, flavor } = args;
      if (base !== null) {
        await prisma.createMaterial({
          base
        });
      }
      if (flavor !== null) {
        await prisma.createMaterial({
          flavor
        });
      }
      return true;
    }
  }
};
