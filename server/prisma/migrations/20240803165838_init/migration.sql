/*
  Warnings:

  - You are about to drop the column `TotalExpenses` on the `ExpenseSummary` table. All the data in the column will be lost.
  - Added the required column `totalExpenses` to the `ExpenseSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpenseSummary" DROP COLUMN "TotalExpenses",
ADD COLUMN     "totalExpenses" DOUBLE PRECISION NOT NULL;