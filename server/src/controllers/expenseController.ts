import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenseByCategoryRaw = await prisma.expenseByCategory.findMany({
      orderBy: {
        date: "desc",
      },
    });
    const expenseByCategorySummary = expenseByCategoryRaw.map((item) => ({
      ...item,
      amount: item.amount.toString(),
    }));

    res.json(expenseByCategorySummary);
  } catch (error) {
    console.log(
      "expenseController - error fetching expenses by category",
      error
    );
  }
};
