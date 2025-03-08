import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from '@prisma/client';
import { CreateMovimentacaoDto } from './dto/create-movimentacao';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosRepository {
  constructor(private prisma: PrismaService) { }

  async create(produtos: CreateProdutoDto): Promise<Partial<Produto>> {
    return await this.prisma.produto.create({
      data: {
        nome: produtos.nome,
        descricao: produtos.descricao,
        valor: produtos.valor,
        estoque: produtos.estoque,
        imagem: produtos.imagem,
        usuarioId: produtos.userId,
        criadoEm: new Date(),
        atualizadoEm: new Date(),
      },
    });
  }

  async findAllProduto(userId: number): Promise<Produto[]> {
    return await this.prisma.produto.findMany({
      where: {
        usuarioId: userId,
      },
    });
  }

  async findOneProduto(produtoId: number): Promise<Produto | null> {
    return await this.prisma.produto.findUnique({
      where: {
        id: produtoId,
      },
    });
  }

  async editarProduto(produto: UpdateProdutoDto): Promise<Produto> {
    if (!produto) {
      throw new Error('Não foi possível editar o produto.');
    }
    return await this.prisma.produto.update({
      where: {
        id: produto.id,
      },
      data: {
        ...produto,
        atualizadoEm: new Date(),
      },
    });
  }

  async criaMovimentacao(movimentacao: CreateMovimentacaoDto) {
    return await this.prisma.movimentacoes.create({
      data: {
        usuarioId: movimentacao.usuarioId,
        produtoId: movimentacao.produtoId,
        tipo: movimentacao.tipo,
        quantidade: movimentacao.quantidade,
        data: new Date(),
      },
    });
  }
}