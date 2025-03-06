import { IsNotEmpty } from "class-validator";

export class CreateProdutoDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  valor: number;

  @IsNotEmpty()
  estoque: number;

  @IsNotEmpty()
  imagem: string;
}
