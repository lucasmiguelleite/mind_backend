import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateMovimentacaoDto {
  @IsNotEmpty()
  usuarioId: number;

  @IsNotEmpty()
  produtoId: number;

  @IsNotEmpty()
  tipo: 'Entrada' | 'Saída';

  @IsNotEmpty()
  quantidade: number;

  @IsOptional()
  produtoExcluido?: string;
}
