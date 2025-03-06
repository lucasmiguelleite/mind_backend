/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Movimentacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `produtoId` INTEGER NOT NULL,
    `tipo` ENUM('Entrada', 'Saída') NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Produto_usuarioId_key` ON `Produto`(`usuarioId`);

-- AddForeignKey
ALTER TABLE `Movimentacoes` ADD CONSTRAINT `Movimentacoes_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movimentacoes` ADD CONSTRAINT `Movimentacoes_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
