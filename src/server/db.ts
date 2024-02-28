import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany({
    include: {
      author: true
    }

  });
  console.log(posts);
  const post = await prisma.post.create({
    data: {
      title: 'my first post',
      body: 'my first post body',
      author: {
        connect: {
          id: 'yues'
        }
      }
    }
  })
  console.log(post);
}

main();