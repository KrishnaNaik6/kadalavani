import { PrismaClient } from "@prisma/client";
import { TAKE, SKIP } from "../config/defaults.js";
import getBaseModel from "./BaseModel.js";
const prisma = new PrismaClient();
const Baseclass = getBaseModel(prisma.article);
class Article extends Baseclass {}
export default Article;

// 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
