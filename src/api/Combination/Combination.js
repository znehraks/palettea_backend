import { prisma } from "../../../generated/prisma-client";

export default {
  Combination: {
    base: ({ id }) => prisma.combination({ id }).base(),
    flavor: ({ id }) => prisma.combination({ id }).flavor(),
  }
};