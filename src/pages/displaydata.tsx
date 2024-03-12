import Link from 'next/link';
import React from 'react';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function DisplayData() {
  
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
  const usersWithProfile = await prisma.user.findMany({
    where: {
      profile: {
        isSet: true,
      },
    },
    select: {
      id: true,
      profile: {
        select: {
          profilePicture: true,
        },
      },
      posts: {
        where: {
          published: true,
        },
      },
    },
    take: 10,
    orderBy: {
      profile: {
        firstName: "asc",
      },
    },

  });
  return (
    <>
    <p>hi my name is {usersWithProfile}</p>
    </>
  )

}

