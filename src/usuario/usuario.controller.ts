import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post("/cadastro")
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.criar(createUsuarioDto);
  }
}
