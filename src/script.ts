/* // script.ts
import { Prisma } from '@prisma/client';
import prisma from './libs/prisma';

// 1
export const createUser = async (user: Prisma.UserCreateInput) => {
  // 2 & 3
  return await prisma.user.create({
    data: user,
  });
};

export const getPosts = async () => {
  const published = await prisma.post.findMany({ where: { published: true } });
  const unpublished = await prisma.post.findMany({
    where: { published: false },
  });

  return { published, unpublished };
};

export const getPostByID = async (id: number) => {
  try {
    return await prisma.post.findUniqueOrThrow({ where: { id } });
  } catch (e: any) {
    return e.message;
  }
}; 

export const getPostByID = async (id: number) => {
  return await prisma.post.findUniqueOrThrow({ where: { id } });
};

export const addPostSequential = async (data: Prisma.PostCreateInput) => {
  const [newPost, count] = await prisma.$transaction([
    prisma.post.create({ data }),
    prisma.post.count(),
  ]);

  return { newPost, count };
};

export const addPostInteractive = async (data: Prisma.PostCreateInput) => {
  return await prisma.$transaction(async tx => {
    if (!('published' in data)) {
      data['published'] = true;
    }

    const newPost = await tx.post.create({ data });
    const count = await tx.post.count();

    return { newPost, count };
  });
};

export const updateUser = async (
  id: number,
  data: Prisma.UserUpdateInput,
  clearPosts: boolean,
) => {
  const user = await prisma.user.update({
    where: { id },
    data,
  });
  if (clearPosts) {
    await prisma.post.deleteMany({ where: { authorId: id } });
  }

  return user;
};
 */
