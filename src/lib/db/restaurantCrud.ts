import { PrismaClient, Restaurant, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
const UNIQUE_CONSTRAINT_VIOLATION_CODE = 'P2002';
const RECORD_NOT_FOUND_CODE = 'P2025';
const FOREIGN_KEY_VIOLATION_CODE = 'P2003';

export async function createRestaurant(RestaurantData: Prisma.RestaurantCreateInput): Promise<Restaurant> {
  try {
    return await prisma.restaurant.create({
      data: RestaurantData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === UNIQUE_CONSTRAINT_VIOLATION_CODE) {
        throw new Error('A Restaurant with this email already exists');
      }
    }
    throw error;
  }
}

export async function getRestaurantById(id: string): Promise<Restaurant | null> {
  return await prisma.restaurant.findUnique({
    where: { id },
  });
}

export async function getRestaurantByName(name: string): Promise<Restaurant | null> {
  return await prisma.restaurant.findFirst({
    where: { name },
  });
}

export async function getAllRestaurants(): Promise<Restaurant[]> {
  return await prisma.restaurant.findMany();
}

export async function updateRestaurant(id: string, RestaurantData: Prisma.RestaurantUpdateInput): Promise<Restaurant> {
  try {
    return await prisma.restaurant.update({
      where: { id },
      data: RestaurantData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === RECORD_NOT_FOUND_CODE) {
        throw new Error('Restaurant not found');
      }
      if (error.code === UNIQUE_CONSTRAINT_VIOLATION_CODE) {
        throw new Error('A Restaurant with this email already exists');
      }
    }
    throw error;
  }
}

export async function deleteRestaurant(id: string): Promise<Restaurant> {
  try {
    return await prisma.restaurant.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === RECORD_NOT_FOUND_CODE) {
        throw new Error('Restaurant not found');
      }
    }
    throw error;
  }
}