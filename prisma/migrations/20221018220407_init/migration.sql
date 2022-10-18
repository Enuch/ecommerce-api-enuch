/*
  Warnings:

  - You are about to drop the column `preco` on the `products` table. All the data in the column will be lost.
  - Added the required column `active` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carts" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "preco",
ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "prico" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "active" BOOLEAN NOT NULL;
