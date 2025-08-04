import { PrismaClient } from "@prisma/client";
const run = async () => {
  const prisma = new PrismaClient();
  console.log(
    await prisma.category.create({
      data: {
        name: { en: "Shooting--1", ka: "ಶೂಟಿಂಗ್" },
        status: 1,
      },
    })
  );
  //   console.log(await prisma.category.findFirst());
};

run();
