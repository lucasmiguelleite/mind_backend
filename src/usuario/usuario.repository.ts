import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUsuarioDto } from "./dto/create-usuario.dto";
import { Usuario } from "@prisma/client";

@Injectable()
export class UsuarioRepository {
  constructor(private prisma: PrismaService) { }
  async criar(usuario: CreateUsuarioDto): Promise<Partial<Usuario>> {
    return this.prisma.usuario.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
        criadoEm: new Date(),
        atualizadoEm: new Date(),
      },
      omit: {
        senha: true,
      },
    });
  }

  async buscarPorEmail(email: string): Promise<Partial<Usuario> | null> {
    return this.prisma.usuario.findUnique({ where: { email } });
  }
}