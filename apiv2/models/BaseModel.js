import { TAKE, SKIP } from "../config/defaults.js";
export default function getBaseModel(model) {
  return class BaseModel {
    constructor() {}
    static async create(data) {
      console.log(data);
      try {
        const createdData = await model.create({ data });
        return createdData;
      } catch (e) {
        console.log(e);
        return { hasError: e };
      }
    }
    static async update(where, data) {
      try {
        return await model.update({
          where,
          data,
        });
      } catch (e) {
        return { hasError: e };
      }
    }
    static async delete(id) {
      try {
        return await model.delete({
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
      orderBy = { created_at: "asc" },
      cursor,
      take = TAKE,
      skip = SKIP
    ) {
      const query = {};

      if (where) query.where = where;
      if (orderBy) query.orderBy = [{ created_at: "desc" }];
      if (cursor) query.cursor = cursor;
      if (take) query.take = take;
      if (skip) query.skip = skip;
      console.log(query);
      try {
        const result = await model.findMany(query);
        const count = await model.count({ where });
        return { data: result, count };
      } catch (e) {
        console.log(e);
        return { hasError: e };
      }
    }
    static async meta(where = {}) {
      const query = {};
      if (where) query.where = where;
      try {
        const count = await model.count({ where });
        return { count };
      } catch (e) {
        return { hasError: e };
      }
    }
    static async findById(id) {
      try {
        return await model.findUnique({
          where: {
            id,
          },
        });
      } catch (e) {
        return { hasError: e };
      }
    }
  };
}
