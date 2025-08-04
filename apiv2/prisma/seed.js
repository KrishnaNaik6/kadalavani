import { PrismaClient } from "@prisma/client";
import seedUsers from "./seeds/users.js";
import seedRoles from "./seeds/roles.js";
import seedCategories from "./seeds/category.js";
const prisma = new PrismaClient();

async function main() {
  await seedRoles(prisma);
  await seedUsers(prisma);
  await seedCategories(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
