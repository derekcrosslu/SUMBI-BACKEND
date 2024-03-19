import { Module } from '@nestjs/common';
import { NotaController } from './Nota.controller';
import { NotaService } from './nota.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [NotaController],
  providers: [NotaService],
  imports: [PrismaModule]
})
export class NotaModule {}
