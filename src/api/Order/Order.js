import { prisma } from "../../../generated/prisma-client";

export default {
  Order: {
    orderProduct: ({ id }) => prisma.order({ id }).orderProduct(),
    orderCombination: ({ id }) => prisma.order({ id }).orderCombination(),
  }
};