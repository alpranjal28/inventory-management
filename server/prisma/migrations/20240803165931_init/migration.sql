/*
  Warnings:

  - You are about to drop the column `changrPercentage` on the `PurchaseSummary` table. All the data in the column will be lost.
  - Added the required column `changePercentage` to the `PurchaseSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseSummary" DROP COLUMN "changrPercentage",
ADD COLUMN     "changePercentage" DOUBLE PRECISION NOT NULL;
