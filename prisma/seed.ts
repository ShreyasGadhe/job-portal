import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "Pedro", email: "pedro@gmail.com" },
      { name: "Caroline", email: "caroline@gmail.com" },
    ],
  });
}

seed().then(() => prisma.$disconnect());
