import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      email: `sameep@gmail.com`,
      name: "sameep sawant",
      image: "image",
    },
  });
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
