import { Module } from '@nestjs/common';
import { SeguimientoController } from './seguimiento.controller';
import { SeguimientoService } from './seguimiento.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [SeguimientoController],
  providers: [SeguimientoService],
  imports: [PrismaModule]
})
export class SeguimientoModule {}
