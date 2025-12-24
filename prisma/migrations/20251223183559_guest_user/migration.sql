-- AlterTable
ALTER TABLE "user" ADD COLUMN     "contractNumber" TEXT,
ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 0;
