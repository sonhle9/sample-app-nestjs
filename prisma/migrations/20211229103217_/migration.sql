-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "password_digest" TEXT NOT NULL,
    "remember_digest" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "activation_digest" TEXT NOT NULL,
    "activated" BOOLEAN NOT NULL,
    "activated_at" DATETIME NOT NULL,
    "reset_digest" TEXT NOT NULL,
    "reset_sent_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Micropost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Relationship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "follower_id" INTEGER NOT NULL,
    "followed_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);
