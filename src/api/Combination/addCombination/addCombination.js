import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addCombination: async (_, args) => {
      const { base, flavor, depth, count } = args;
      const exists = await prisma.$exists.combination({
        AND: {
          base_some,
          flavor_some,
          depth_some
        }
      });
      if (exists) {
        count + 1;
      }
      const combination = await prisma.createCombination({
        base,
        flavor,
        depth,
        count
      });
      return combination;
    }
  }
};
