import { Module } from '@nestjs/common';
import { DepositosService } from './depositos.service';
import { DepositosController } from './depositos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [DepositosService],
  controllers: [DepositosController],
  imports: [PrismaModule]
})
export class DepositosModule {}
