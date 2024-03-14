import { Seguimiento } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class SeguimientoService {
  constructor(private prisma: PrismaService) {}

  async getAllSeguimientos(): Promise<Seguimiento[]> {
    logger.info('getAllSeguimientos');
    return this.prisma.seguimiento.findMany();
  }

  async getSeguimientoById(id: number): Promise<Seguimiento> {
    logger.info('getSeguimientoById', { id });
    return this.prisma.seguimiento.findUnique({
      where: {
        codigoSeguimiento: id,
      },
    });
  }

  async createSeguimiento(data: Seguimiento): Promise<Seguimiento> {
    return this.prisma.seguimiento.create({
      data,
    });
  }

  async updateSeguimiento(id: number, data: Seguimiento): Promise<Seguimiento> {
    return this.prisma.seguimiento.update({
      where: {
        codigoSeguimiento: id,
      },
      data,
    });
  }

  async deleteSeguimiento(id: number): Promise<Seguimiento> {
    return this.prisma.seguimiento.delete({
      where: {
        codigoSeguimiento: id,
      },
    });
  }
}
