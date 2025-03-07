import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioRepository } from "./usuario.repository";

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) { }
  async criar(createUsuarioDto: CreateUsuarioDto) {
    const usuarioJaExiste = await this.usuarioRepository.buscarPorEmail(createUsuarioDto.email);

    if (usuarioJaExiste) {
      throw new ConflictException('Email já utilizado por outro usuário');
    }

    const senha = await bcrypt.hash(createUsuarioDto.senha, 10);

    return this.usuarioRepository.criar({
      nome: createUsuarioDto.nome,
      email: createUsuarioDto.email,
      senha: senha,
    });
  }
}
