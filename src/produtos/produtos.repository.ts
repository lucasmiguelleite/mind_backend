import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from '@prisma/client';

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
}