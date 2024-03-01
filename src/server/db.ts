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

//async function main() {
  //const login = await prisma.general.create({
    //data: {
      //id: 'SE
      //Username: 'se'
      //Password: 'se'
      //Email: 'ls
      //Archived_Records: 'A0C435'
      //In_Game_Progress: '1.098
      //Uploaded_Records: 'B1C089'                              

    //}

  //});

  //console.log(login);
//}

//main();