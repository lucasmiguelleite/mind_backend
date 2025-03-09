import { IsEmail, IsOptional, IsString, Length, Matches } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(4, 30)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca, senha deve possuir no minímo 1 letra maiúscula, 1 letra minúscula e 1 número. E deve possuir no minímo 4 caracteres.',
  })
  password: string;

}
