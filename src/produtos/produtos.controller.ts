import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) { }

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    return await this.produtosService.create(createProdutoDto);
  }

  @Get()
  async findAllProduto(@Request() req) {
    return await this.produtosService.findAllProduto(req.user.sub);
  }

  @Get(':produtoId')
  async findOneProduto(@Param('produtoId') produtoId: number) {
    return await this.produtosService.findOneProduto(produtoId);
  }

  @Get('/movimentacao')
  async findAllMovimentacao(@Request() req) {
    return await this.produtosService.findAllMovimentacao(req.user.sub);
  }

  @Patch()
  async atualizarProduto(@Body() updateProdutoDto: UpdateProdutoDto) {
    return await this.produtosService.atualizarProduto(updateProdutoDto);
  }

  @Delete(':id')
  async removerProduto(@Param('id') id: number) {
    return this.produtosService.removerProduto(id);
  }
}
