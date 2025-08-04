import { PrismaClient } from "@prisma/client";
import getBaseModel from "./BaseModel.js";
const prisma = new PrismaClient();
const Baseclass = getBaseModel(prisma.tag);
class Tag extends Baseclass {}
export default Tag;
