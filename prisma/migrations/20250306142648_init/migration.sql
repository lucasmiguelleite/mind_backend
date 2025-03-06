/*
  Warnings:

  - You are about to drop the column `AtualizadoEm` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the column `AtualizadoEm` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `atualizadoEm` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizadoEm` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produto` DROP COLUMN `AtualizadoEm`,
    ADD COLUMN `atualizadoEm` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `AtualizadoEm`,
    ADD COLUMN `atualizadoEm` DATETIME(3) NOT NULL;
