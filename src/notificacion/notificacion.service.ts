import { Notificacion } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class NotificacionService {
  constructor(private prisma: PrismaService) {}

  async getAllNotificacions(): Promise<Notificacion[]> {
    logger.info('getAllNotificacions');
    return this.prisma.notificacion.findMany();
  }

  async getNotificacionById(id: number): Promise<Notificacion> {
    logger.info('getNotificacionById', { id });
    return this.prisma.notificacion.findUnique({
      where: {
        codigoNotificacion: id,
      },
    });
  }

  async createNotificacion(data: Notificacion): Promise<Notificacion> {
    return this.prisma.notificacion.create({
      data,
    });
  }

  async updateNotificacion(id: number, data: Notificacion): Promise<Notificacion> {
    return this.prisma.notificacion.update({
      where: {
        codigoNotificacion: id,
      },
      data,
    });
  }

  async deleteNotificacion(id: number): Promise<Notificacion> {
    return this.prisma.notificacion.delete({
      where: {
        codigoNotificacion: id,
      },
    });
  }
}
