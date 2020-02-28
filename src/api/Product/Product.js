import { prisma } from "../../../generated/prisma-client";

export default {
  Product: {
    productCombination: ({ id }) => prisma.product({ id }).productCombination()
  }
};