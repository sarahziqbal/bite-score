import { PrismaClient, Review, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const UNIQUE_CONSTRAINT_VIOLATION_CODE = 'P2002';
const RECORD_NOT_FOUND_CODE = 'P2025';
const FOREIGN_KEY_VIOLATION_CODE = 'P2003';

export async function createReview(reviewData: Prisma.ReviewCreateInput): Promise<Review> {
  try {
    return await prisma.review.create({
      data: reviewData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === UNIQUE_CONSTRAINT_VIOLATION_CODE) {
        throw new Error('User has already reviewed this food item');
      }
      if (error.code === FOREIGN_KEY_VIOLATION_CODE) {
        throw new Error('Food item or user not found');
      }
    }
    throw error;
  }
}

export async function getReviewById(id: string): Promise<Review | null> {
  return await prisma.review.findUnique({
    where: { id },
  });
}

export async function getReviewsByUserId(userId: string): Promise<Review[]> {
  return await prisma.review.findMany({
    where: { userId },
  });
}

export async function getReviewsByFoodItemId(foodItemId: string): Promise<Review[]> {
  return await prisma.review.findMany({
    where: { foodItemId },
  });
}

export async function getReviewsByRestaurantId(restaurantId: string): Promise<Review[]> {
  return await prisma.review.findMany({
    where: {
      foodItem: {
        restaurantId: restaurantId,
      },
    },
  });
}

export async function getAllReviews(): Promise<Review[]> {
  return await prisma.review.findMany();
}

export async function updateReview(id: string, reviewData: Prisma.ReviewUpdateInput): Promise<Review> {
  try {
    return await prisma.review.update({
      where: { id },
      data: reviewData,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === RECORD_NOT_FOUND_CODE) {
        throw new Error('Review not found');
      }
      if (error.code === UNIQUE_CONSTRAINT_VIOLATION_CODE) {
        throw new Error('User has already reviewed this food item');
      }
      if (error.code === FOREIGN_KEY_VIOLATION_CODE) {
        throw new Error('Food item or user not found');
      }
    }
    throw error;
  }
}

export async function deleteReview(id: string): Promise<Review> {
  try {
    return await prisma.review.delete({
      where: { id },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === RECORD_NOT_FOUND_CODE) {
        throw new Error('Review not found');
      }
    }
    throw error;
  }
}