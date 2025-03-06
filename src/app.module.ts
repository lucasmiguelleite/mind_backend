import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ProdutosModule, PrismaModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
