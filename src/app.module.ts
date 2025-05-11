import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { EmpresaModule } from './empresa/empresa.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ReciboModule } from './recibo/recibo.module';
import { SeedController } from './seed/seed.controller';

@Module({
  imports: [
    PrismaModule,
    UsuarioModule,
    AuthModule,
    EmpresaModule,
    FuncionarioModule,
    ReciboModule,
  ],
  controllers: [AppController, SeedController], // ✅ sem UsuarioController aqui
  providers: [AppService],
})
export class AppModule {}

