import { prisma } from "../../../../generated/prisma-client";
import {isAdm} from "../../../middlewares";

export default {
  Mutation: {
    editAccount: async (_, args, { request, isAdm }) => {
      isAuthenticated(request);
      const { password, userName, address1, address2} = args;
      const { user } = request;
      return prisma.updateUser({
        where: { email: user.email },
        data: { password, userName, address1, address2 }
      });
    }
  }
};
