import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
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

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  // update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //   return `This action updates a #${id} usuario`;
  // }
}
