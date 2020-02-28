import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addCombination: async (_, args, { request, isAdm }) => {
      isAdm(request);
      var { base, flavor, depth } = args;
      const code = base + flavor + depth;
      const exists = await prisma.$exists.combination({
        code
      });
      if (exists) {
        console.log("Already Exist");
        //count+1 하는 코드
        return false;
      }
      await prisma.createCombination({
        base: {
          connect: {
            baseName: base
          }
        },
        flavor: {
          connect: {
            flavorName: flavor
          }
        },
        depth,
        code
      });
      return true;
    }
  }
};
