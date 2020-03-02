import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editCombination: async (_, args, { request, isAdm }) => {
      isAdm(request);
      var { combinationCode, base, flavor, depth } = args;
      const newCode = base + flavor + depth;
      const exists = await prisma.$exists.combination({
        code: newCode
      });
      if (exists) {
        console.log("Already Exist");
        return false;
      }
      const beforeBase = code.slice(0, 2);
      const beforeFlavor = code.slice(2, 4);
      if (base === beforeBase) {
        await prisma.updateCombination({
          where: { code },
          data: {
            flavor: {
              disconnect: {
                flavorName: beforeFlavor
              },
              connect: {
                flavorName: flavor
              }
            },
            depth,
            combinationCode: newCode
          }
        });
        return true;
      } else if (flavor === beforeFlavor) {
        await prisma.updateCombination({
          where: { code },
          data: {
            base: {
              disconnect: {
                baseName: beforeBase
              },
              connect: {
                baseName: base
              }
            },
            depth,
            combinationCode: newCode
          }
        });
        return true;
      } else {
        await prisma.updateCombination({
          where: { code },
          data: {
            base: {
              disconnect: {
                baseName: beforeBase
              },
              connect: {
                baseName: base
              }
            },
            flavor: {
              disconnect: {
                flavorName: beforeFlavor
              },
              connect: {
                flavorName: flavor
              }
            },
            depth,
            combinationCode: newCode
          }
        });
        return true;
      }
    }
  }
};
