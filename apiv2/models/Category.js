import { PrismaClient } from "@prisma/client";
import getBaseModel from "./BaseModel.js";
const prisma = new PrismaClient();
const Baseclass = getBaseModel(prisma.category);
class Category extends Baseclass {}
export default Category;
