import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProdutosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
