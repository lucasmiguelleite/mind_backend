import { IsNotEmpty } from "class-validator";

export class CreateProdutoDto {
  @IsNotEmpty({
    message: "Nome não informado"
  })
  nome: string;

  @IsNotEmpty({
    message: "Descrição não informada"
  })
  descricao: string;

  @IsNotEmpty({
    message: "Valor não informado"
  })
  valor: number;

  @IsNotEmpty({
    message: "Estoque não informado"
  })
  estoque: number;

  @IsNotEmpty({
    message: "Imagem não fornecida"
  })
  imagem: string;

  @IsNotEmpty()
  userId: number;
}
