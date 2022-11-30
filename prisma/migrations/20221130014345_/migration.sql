-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "CoverImageUrl" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Year" TEXT NOT NULL,
    "ImdbScore" TEXT NOT NULL,
    "TrailerYouTubeUrl" TEXT NOT NULL,
    "GameplayYouTubeUrl" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "Game"("id");
