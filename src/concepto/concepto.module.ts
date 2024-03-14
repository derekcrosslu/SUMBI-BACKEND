import { Module } from '@nestjs/common';
import { ConceptoController } from './concepto.controller';
import { ConceptoService } from './concepto.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ConceptoController],
  providers: [ConceptoService],
  imports: [PrismaModule]
})
export class ConceptoModule {}
