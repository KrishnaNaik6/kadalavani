import { PrismaClient } from "@prisma/client";
import { TAKE, SKIP } from "../config/defaults.js";
const prisma = new PrismaClient();
class User {
  static async create(user) {
    try {
      return await prisma.user.create({ data: user });
    } catch (e) {
      return { hasError: e };
    }
  }
  static async update(where, data) {
    try {
      return await prisma.user.update({
        where,
        data,
      });
    } catch (e) {
      return { hasError: e };
    }
  }
  static async delete(id) {
    try {
      return await prisma.user.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      return { hasError: e };
    }
  }
  static async find(
    where = {},
    orderBy = {},
    cursor = [],
    take = TAKE,
    skip = SKIP
  ) {
    try {
      return await prisma.user.findMany({
        where,
        orderBy,
        cursor,
        take,
        skip,
      });
    } catch (e) {
      return { hasError: e };
    }
  }
  static async findById(id) {
    try {
      return await prisma.user.findUnique({
        where: {
          id,
        },
      });
    } catch (e) {
      return { hasError: e };
    }
  }
}

export default User;
