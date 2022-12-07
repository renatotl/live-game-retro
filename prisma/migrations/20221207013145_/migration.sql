/*
  Warnings:

  - You are about to drop the column `coverImageUrl` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `gameplayYouTubeUrl` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `generoId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `imdbScore` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `trailerYouTubeUrl` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `imageURL` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cover_image` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameplay_video` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imb_score` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trailer_video` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_generoId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "coverImageUrl",
DROP COLUMN "gameplayYouTubeUrl",
DROP COLUMN "generoId",
DROP COLUMN "imdbScore",
DROP COLUMN "trailerYouTubeUrl",
ADD COLUMN     "cover_image" TEXT NOT NULL,
ADD COLUMN     "gameplay_video" TEXT NOT NULL,
ADD COLUMN     "imb_score" TEXT NOT NULL,
ADD COLUMN     "trailer_video" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "imageURL",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "is_admin" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "_GameToGenero" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToGenero_AB_unique" ON "_GameToGenero"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToGenero_B_index" ON "_GameToGenero"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- AddForeignKey
ALTER TABLE "_GameToGenero" ADD CONSTRAINT "_GameToGenero_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToGenero" ADD CONSTRAINT "_GameToGenero_B_fkey" FOREIGN KEY ("B") REFERENCES "Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;
