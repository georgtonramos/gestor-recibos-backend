import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // opcional, se quiser tornar o serviço global
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
