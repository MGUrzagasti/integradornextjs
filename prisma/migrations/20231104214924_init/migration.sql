/*
  Warnings:

  - You are about to drop the `subscriptores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `subscriptores`;

-- CreateTable
CREATE TABLE `Inscriptos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pnombre` VARCHAR(30) NOT NULL,
    `snombre` VARCHAR(30) NOT NULL,
    `correo` VARCHAR(50) NOT NULL,
    `comentario` VARCHAR(400) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
