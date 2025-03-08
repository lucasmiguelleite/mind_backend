import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosRepository } from './produtos.repository';
import { CreateMovimentacaoDto } from './dto/create-movimentacao';

@Injectable()
export class ProdutosService {
  constructor(private produtosRepository: ProdutosRepository) { }
  async create(createProdutoDto: CreateProdutoDto) {
    try {
      const produto = await this.produtosRepository.create(createProdutoDto);
      if (!produto || !produto.id || !produto.usuarioId || !produto.estoque) {
        throw new Error("Erro ao criar o movimentação");
      }
      const createMovimentacaoDto: CreateMovimentacaoDto = {
        usuarioId: produto.usuarioId,
        produtoId: produto.id,
        tipo: 'Entrada',
        quantidade: produto.estoque,
      }
      await this.produtosRepository.criaMovimentacao(createMovimentacaoDto);
      return produto;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllProduto(userId: number) {
    if (!userId) {
      throw new Error("Usuario não informado");
    }
    return this.produtosRepository.findAllProduto(userId);
  }

  async findOneProduto(produtoId: number) {
    return this.produtosRepository.findOneProduto(produtoId);
  }

  async atualizarProduto(updateProdutoDto: UpdateProdutoDto) {
    if (!updateProdutoDto) {
      throw new Error("Dados não informados");
    }
    return this.produtosRepository.editarProduto(updateProdutoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
