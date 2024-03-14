import { Module } from '@nestjs/common';
import { ReciboController } from './recibo.controller';
import { ReciboService } from './recibo.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ReciboController],
  providers: [ReciboService],
  imports: [PrismaModule]
})
export class ReciboModule {}
