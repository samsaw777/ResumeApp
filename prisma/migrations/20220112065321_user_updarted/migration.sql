/*
  Warnings:

  - You are about to drop the column `user_id` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profile_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_user_id_fkey";

-- DropIndex
DROP INDEX "Profile_user_id_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profile_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_profile_id_key" ON "User"("profile_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
