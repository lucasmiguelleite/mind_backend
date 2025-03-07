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
      if (!produto || !produto.id || !produto.usuarioId) {
        throw new Error("Erro ao criar o movimentação");
      }
      const createMovimentacaoDto: CreateMovimentacaoDto = {
        usuarioId: produto.usuarioId,
        produtoId: produto.id,
        tipo: 'Entrada',
        quantidade: createProdutoDto.estoque,
      }
      await this.produtosRepository.criaMovimentacao(createMovimentacaoDto);
      return produto;
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all produtos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
