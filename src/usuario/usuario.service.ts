import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) { }
  create(createUsuarioDto: CreateUsuarioDto) {
    return createUsuarioDto;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  // update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //   return `This action updates a #${id} usuario`;
  // }
}
