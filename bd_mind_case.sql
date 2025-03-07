-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07/03/2025 às 21:23
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_mind_case`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `movimentacoes`
--

CREATE TABLE `movimentacoes` (
  `id` int(11) NOT NULL,
  `usuarioId` int(11) NOT NULL,
  `produtoId` int(11) NOT NULL,
  `tipo` enum('Entrada','Saída') NOT NULL,
  `quantidade` int(11) NOT NULL,
  `data` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(191) NOT NULL,
  `descricao` varchar(191) NOT NULL,
  `valor` double NOT NULL,
  `estoque` int(11) NOT NULL,
  `imagem` varchar(191) NOT NULL,
  `criadoEm` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `usuarioId` int(11) NOT NULL,
  `atualizadoEm` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `senha` varchar(191) NOT NULL,
  `criadoEm` timestamp(3) NOT NULL DEFAULT current_timestamp(3),
  `atualizadoEm` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('2c51eff9-db6b-473c-8249-ed50d61a1aaf', '076c83ccb4de2f48470feaea3631b12a419b54ce8d9ef9bd6616ba046d2e3d63', '2025-03-06 14:26:49.002', '20250306142648_init', NULL, NULL, '2025-03-06 14:26:48.989', 1),
('67d22a6e-6871-45fb-a854-c687a4c9314c', 'c01f6bc541b909d666634afb2e5206bb6863900727c2413b1ec04d33532cbd86', '2025-03-06 14:26:23.667', '20250306142623_init', NULL, NULL, '2025-03-06 14:26:23.608', 1),
('9f434390-b0fc-4ca9-92f5-02f98fa960d9', '4d9608ae99f4ebc05957bfb074551b6932dd077cb2227106814b46e1a715b3bc', '2025-03-06 14:48:53.641', '20250306144853_init', NULL, NULL, '2025-03-06 14:48:53.538', 1),
('ed3fc1fb-a854-4638-b325-eb3d41b80747', 'b6cbf7b243e3ebce306de98acf6c7a6c7a1f0743a9188888ffbf0807f7637fb0', '2025-03-07 16:15:03.994', '20250307161503_init', NULL, NULL, '2025-03-07 16:15:03.955', 1),
('fe25574d-8703-4755-98e1-e85f33f0e52d', 'bf4f18ba277ae114142ca46829b5dec95392543b1bea15399b175b38c1be03ad', '2025-03-06 13:28:20.980', '20250306132820_create_produto_table', NULL, NULL, '2025-03-06 13:28:20.968', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `movimentacoes`
--
ALTER TABLE `movimentacoes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Movimentacoes_usuarioId_fkey` (`usuarioId`),
  ADD KEY `Movimentacoes_produtoId_fkey` (`produtoId`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Produto_usuarioId_key` (`usuarioId`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Usuario_email_key` (`email`);

--
-- Índices de tabela `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `movimentacoes`
--
ALTER TABLE `movimentacoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `movimentacoes`
--
ALTER TABLE `movimentacoes`
  ADD CONSTRAINT `Movimentacoes_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produto` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Movimentacoes_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `Produto_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
