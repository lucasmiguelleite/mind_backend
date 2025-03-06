import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post("/cadastro")
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.criar(createUsuarioDto);
  }

  @Get('/login')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuarioService.update(+id, updateUsuarioDto);
  // }
}
