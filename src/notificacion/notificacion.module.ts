import { Module } from '@nestjs/common';
import { NotificacionController } from './Notificacion.controller';
import { NotificacionService } from './notificacion.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [NotificacionController],
  providers: [NotificacionService],
  imports: [PrismaModule]
})
export class NotificacionModule {}
