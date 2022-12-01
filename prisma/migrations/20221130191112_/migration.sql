/*
  Warnings:

  - You are about to drop the column `CoverImageUrl` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `GameplayYouTubeUrl` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `ImdbScore` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `TrailerYouTubeUrl` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `Year` on the `Game` table. All the data in the column will be lost.
  - Added the required column `coverImageUrl` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameplayYouTubeUrl` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imdbScore` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trailerYouTubeUrl` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "CoverImageUrl",
DROP COLUMN "Description",
DROP COLUMN "GameplayYouTubeUrl",
DROP COLUMN "ImdbScore",
DROP COLUMN "Title",
DROP COLUMN "TrailerYouTubeUrl",
DROP COLUMN "Year",
ADD COLUMN     "coverImageUrl" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "gameplayYouTubeUrl" TEXT NOT NULL,
ADD COLUMN     "imdbScore" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "trailerYouTubeUrl" TEXT NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;
