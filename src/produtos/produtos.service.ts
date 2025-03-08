import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMovimentacaoDto } from './dto/create-movimentacao';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosRepository } from './produtos.repository';

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
      throw new HttpException("Usuario não informado", HttpStatus.BAD_REQUEST);
    }
    return this.produtosRepository.findAllProduto(userId);
  }

  async findOneProduto(produtoId: number) {
    return this.produtosRepository.findOneProduto(produtoId);
  }

  async atualizarProduto(updateProdutoDto: UpdateProdutoDto) {
    // verifica se todos os campos estão vazios
    if (!updateProdutoDto.nome && !updateProdutoDto.descricao && !updateProdutoDto.valor && !updateProdutoDto.estoque && !updateProdutoDto.imagem) {
      throw new HttpException("Dados não informados", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    // pega o valor antigo e compara com o novo para gerar a movimentação
    const oldProduto = await this.findOneProduto(updateProdutoDto.id);

    // cria a movimentação ao atualizar
    if (oldProduto && oldProduto.estoque !== updateProdutoDto.estoque) {
      const createMovimentacaoDto: CreateMovimentacaoDto = {
        usuarioId: oldProduto.usuarioId,
        produtoId: oldProduto.id,
        tipo: updateProdutoDto.estoque > oldProduto.estoque ? 'Entrada' : 'Saída',
        quantidade: Math.abs(updateProdutoDto.estoque - oldProduto.estoque),
      }
      await this.produtosRepository.criaMovimentacao(createMovimentacaoDto);
    }

    return this.produtosRepository.editarProduto(updateProdutoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
