import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    orderList: ({ id }) => prisma.user({ id }).orderList(),
    wishList: ({ id }) => prisma.user({ id }).wishList(),
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  }
};