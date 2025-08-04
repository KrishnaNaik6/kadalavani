import { PrismaClient } from "@prisma/client";
import { TAKE, SKIP } from "../config/defaults.js";
import getBaseModel from "./BaseModel.js";
const prisma = new PrismaClient();
const Baseclass = getBaseModel(prisma.employee);
class Employee extends Baseclass {}
export default Employee;
