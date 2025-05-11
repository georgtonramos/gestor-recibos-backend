import { Module } from '@nestjs/common';
import { ReciboService } from './recibo.service';
import { ReciboController } from './recibo.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReciboController],
  providers: [ReciboService],
})
export class ReciboModule {}
