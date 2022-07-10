-- CreateTable
CREATE TABLE "address" (
    "addressId" SERIAL NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "zip" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("addressId")
);

-- CreateTable
CREATE TABLE "user" (
    "userId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "countryCode" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "residenceId" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "post" (
    "postId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postTitle" TEXT NOT NULL,
    "description" TEXT,
    "authorId" INTEGER,

    CONSTRAINT "post_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "like" (
    "likeId" SERIAL NOT NULL,
    "userID" INTEGER,
    "postId" INTEGER,

    CONSTRAINT "like_pkey" PRIMARY KEY ("likeId")
);

-- CreateTable
CREATE TABLE "comment" (
    "commentId" SERIAL NOT NULL,
    "userID" INTEGER,
    "postId" INTEGER,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("commentId")
);

-- CreateTable
CREATE TABLE "tag" (
    "tagId" SERIAL NOT NULL,
    "postId" INTEGER,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("tagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_residenceId_fkey" FOREIGN KEY ("residenceId") REFERENCES "address"("addressId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("postId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("postId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("postId") ON DELETE SET NULL ON UPDATE CASCADE;
