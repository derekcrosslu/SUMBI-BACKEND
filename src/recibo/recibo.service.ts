import { Recibo } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class ReciboService {
  constructor(private prisma: PrismaService) {}

  async getAllRecibos(): Promise<Recibo[]> {
    logger.info('getAllRecibos');
    return this.prisma.recibo.findMany();
  }

  async getReciboById(id: number): Promise<Recibo> {
    logger.info('getReciboById', { id });
    return this.prisma.recibo.findUnique({
      where: {
        codigoRecibo: id,
      },
    });
  }

  async createRecibo(data: Recibo): Promise<Recibo> {
    return this.prisma.recibo.create({
      data,
    });
  }

  async updateRecibo(id: number, data: Recibo): Promise<Recibo> {
    return this.prisma.recibo.update({
      where: {
        codigoRecibo: id,
      },
      data,
    });
  }

  async deleteRecibo(id: number): Promise<Recibo> {
    return this.prisma.recibo.delete({
      where: {
        codigoRecibo: id,
      },
    });
  }
}
