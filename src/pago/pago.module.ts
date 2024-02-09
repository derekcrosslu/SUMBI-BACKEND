import { Module } from '@nestjs/common';
import { PagoController } from './pago.controller';
import { PagoService } from './pago.sevice';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PagoController],
  providers: [PagoService],
  imports: [PrismaModule]
})
export class PagoModule {}
