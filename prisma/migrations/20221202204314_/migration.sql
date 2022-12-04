/*
  Warnings:

  - Added the required column `updateAt` to the `Genero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Genero" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
