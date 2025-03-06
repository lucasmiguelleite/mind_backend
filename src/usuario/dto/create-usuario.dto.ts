import { IsDate, IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {
  @IsEmail()
  email: string;

  @IsString({
    message: 'Senha precisa ser uma string',
  })
  @MinLength(4, {
    message: 'Senha precisa ter no mínimo 4 caracteres',
  })
  @MaxLength(30, {
    message: 'Senha precisa ter no máximo 30 caracteres',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha fraca, senha tem que possuir pelo menos uma letra maiúscula, uma letra minúscula e um número',
  })
  senha: string;

  @IsString({
    message: 'Nome precisa ser uma string',
  })
  nome: string;


}
