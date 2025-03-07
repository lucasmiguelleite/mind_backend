import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) { }

  async create(user: CreateUserDto): Promise<Partial<Usuario>> {
    return this.prisma.usuario.create({
      data: {
        nome: user.name,
        email: user.email,
        senha: user.password,
        criadoEm: new Date(),
        atualizadoEm: new Date(),
      },
      omit: {
        senha: true,
      },
    });
  }

  async findByEmail(email: string): Promise<Partial<Usuario> | null> {
    return this.prisma.usuario.findUnique({
      where: {
        email: email,
      },
    });
  }
}