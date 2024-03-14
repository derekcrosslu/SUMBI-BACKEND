import { Module } from '@nestjs/common';
import { EscalaController } from './escala.controller';
import { EscalaService } from './escala.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [EscalaController],
  providers: [EscalaService],
  imports: [PrismaModule]
})
export class EscalaModule {}
