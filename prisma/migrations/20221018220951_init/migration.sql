/*
  Warnings:

  - You are about to drop the column `prico` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "prico",
ADD COLUMN     "price" DOUBLE PRECISION;
