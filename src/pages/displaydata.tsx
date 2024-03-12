import Link from 'next/link';
import React from 'react';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function DisplayData() {
  
  // ... you will write your Prisma Client queries here
  await prisma.post.create({
    data: {
      title: "My New Post",
      author: {
        connectOrCreate: {
          create: {
            email: "sam@prisma.io",
            profile: {
              firstName: "Sam",
              lastName: "Smith",
            },
          },
          where: {
            email: "sam@prisma.io",
          },
        },
      },
    },
  });

}

