import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  @IsNotEmpty()
  id: number;

  @IsOptional()
  nome: string;

  @IsOptional()
  descricao: string;

  @IsOptional()
  valor: number;

  @IsOptional()
  estoque: number;

  @IsOptional()
  imagem: string;
}
