import { PrismaClient, User, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
const UNIQUE_CONSTRAINT_VIOLATION_CODE = 'P2002';
const RECORD_NOT_FOUND_CODE = 'P2025';
const FOREIGN_KEY_VIOLATION_CODE = 'P2003';

export async function createUser(userData: Prisma.UserCreateInput): Promise<User> {
  try {
    return await prisma.user.create({
      data: userData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === UNIQUE_CONSTRAINT_VIOLATION_CODE) {
        throw new Error('A user with this email already exists');
      }
    }
    throw error;
  }
}

export async function getUserById(id: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { id },
  });
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { email },
  });
}

export async function getAllUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}

export async function updateUser(id: string, userData: Prisma.UserUpdateInput): Promise<User> {
  try {
    return await prisma.user.update({
      where: { id },
      data: userData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === RECORD_NOT_FOUND_CODE) {
        throw new Error('User not found');
      }
      if (error.code === UNIQUE_CONSTRAINT_VIOLATION_CODE) {
        throw new Error('A user with this email already exists');
      }
    }
    throw error;
  }
}

export async function deleteUser(id: string): Promise<User> {
  try {
    return await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === RECORD_NOT_FOUND_CODE) {
        throw new Error('User not found');
      }
    }
    throw error;
  }
}