import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovimentacaoDto } from './dto/create-movimentacao';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { setTime } from 'src/utils/setTime';

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
        criadoEm: setTime(),
        atualizadoEm: setTime(),
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

  async findAllMovimentacao(userId: number) {
    return await this.prisma.movimentacoes.findMany({
      where: {
        usuarioId: userId,
      },
    });
  }

  async findAllMovimentacaoByProdutoId(produtoId: number) {
    return await this.prisma.movimentacoes.findMany({
      where: {
        produtoId: produtoId,
      },
    });
  }

  async editarProduto(produto: UpdateProdutoDto): Promise<Produto> {
    return await this.prisma.produto.update({
      where: {
        id: produto.id,
      },
      data: {
        ...produto,
        atualizadoEm: setTime(),
      },
    });
  }

  async removerProduto(id: number) {
    return await this.prisma.produto.delete({
      where: {
        id: id,
      },
    })
  }

  async criaMovimentacao(movimentacao: CreateMovimentacaoDto) {
    return await this.prisma.movimentacoes.create({
      data: {
        usuarioId: movimentacao.usuarioId,
        produtoId: movimentacao.produtoId,
        tipo: movimentacao.tipo,
        quantidade: movimentacao.quantidade,
        produtoExcluido: movimentacao.produtoExcluido,
        data: setTime(),
      },
    });
  }

  async editaMovimentacao(produto: UpdateProdutoDto, movimentacao) {
    return await this.prisma.movimentacoes.update({
      where: {
        id: movimentacao.id,
      },
      data: {
        produtoExcluido: produto.nome,
      },
    });
  }
}