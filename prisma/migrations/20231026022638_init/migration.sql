-- CreateTable
CREATE TABLE `Subscriptores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pnombre` VARCHAR(30) NOT NULL,
    `snombre` VARCHAR(30) NOT NULL,
    `correo` VARCHAR(50) NOT NULL,
    `comentario` VARCHAR(400) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
