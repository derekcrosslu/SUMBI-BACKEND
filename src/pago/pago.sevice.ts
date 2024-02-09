import { Pago } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class PagoService {
  constructor(private prisma: PrismaService) {}

  async getAllPagos(): Promise<Pago[]> {
    logger.info('getAllPagos');
    return this.prisma.pago.findMany();
  }

  async getPagoById(id: number): Promise<Pago> {
    logger.info('getPagoById', { id });
    return this.prisma.pago.findUnique({
      where: {
        codigoPago: id,
      },
    });
  }

  async createPago(data: Pago): Promise<Pago> {
    return this.prisma.pago.create({
      data,
    });
  }

  async updatePago(id: number, data: Pago): Promise<Pago> {
    return this.prisma.pago.update({
      where: {
        codigoPago: id,
      },
      data,
    });
  }

  async deletePago(id: number): Promise<Pago> {
    return this.prisma.pago.delete({
      where: {
        codigoPago: id,
      },
    });
  }
}
