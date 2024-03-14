import { Module } from '@nestjs/common';
import { HijoController } from './hijo.controller';
import { HijoService } from './hijo.sevice';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [HijoController],
  providers: [HijoService],
  imports: [PrismaModule]
})
export class HijoModule {}
