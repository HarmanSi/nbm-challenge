/*
  Warnings:

  - A unique constraint covering the columns `[tagName]` on the table `tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tag_tagName_key" ON "tag"("tagName");
