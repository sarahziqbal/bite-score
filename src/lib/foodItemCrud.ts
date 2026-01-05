import { PrismaClient, FoodItem, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const UNIQUE_CONSTRAINT_VIOLATION_CODE = 'P2002';
const RECORD_NOT_FOUND_CODE = 'P2025';
const FOREIGN_KEY_VIOLATION_CODE = 'P2003';

export async function createFoodItem(foodItemData: Prisma.FoodItemCreateInput): Promise<FoodItem> {
  try {
    return await prisma.foodItem.create({
      data: foodItemData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === FOREIGN_KEY_VIOLATION_CODE) {
        throw new Error('Restaurant not found');
      }
    }
    throw error;
  }
}

export async function getFoodItemById(id: string): Promise<FoodItem | null> {
  return await prisma.foodItem.findUnique({
    where: { id },
  });
}

export async function getFoodItemByCategory(category: string): Promise<FoodItem | null> {
  return await prisma.foodItem.findFirst({
    where: { category },
  });
}

export async function getFoodItemsByRestaurantId(restaurantId: string): Promise<FoodItem[]> {
  return await prisma.foodItem.findMany({
    where: { restaurantId },
  });
}

export async function getAllFoodItems(): Promise<FoodItem[]> {
  return await prisma.foodItem.findMany();
}

export async function updateFoodItem(id: string, foodItemData: Prisma.FoodItemUpdateInput): Promise<FoodItem> {
  try {
    return await prisma.foodItem.update({
      where: { id },
      data: foodItemData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === RECORD_NOT_FOUND_CODE) {
        throw new Error('Food item not found');
      }
      if (error.code === FOREIGN_KEY_VIOLATION_CODE) {
        throw new Error('Restaurant not found');
      }
    }
    throw error;
  }
}

export async function deleteFoodItem(id: string): Promise<FoodItem> {
  try {
    return await prisma.foodItem.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === RECORD_NOT_FOUND_CODE) {
        throw new Error('Food item not found');
      }
    }
    throw error;
  }
}