import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editAccount: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { password, userName, address1, address2} = args;
      const { user } = request;
      const update = prisma.updateUser({
        where: { email: user.email },
        data: { password, userName, address1, address2 }
      });
      return true;
    }
  }
};
