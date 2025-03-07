import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from '@prisma/client';
import { CreateMovimentacaoDto } from './dto/create-movimentacao';

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

  async findAll(): Promise<Produto[]> {
    return this.prisma.produto.findMany();
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