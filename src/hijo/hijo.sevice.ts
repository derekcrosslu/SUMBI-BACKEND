import { Cliente, Hijos } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class HijoService {
  constructor(private prisma: PrismaService) {}

  async getAllHijos(): Promise<Hijos[]> {
    logger.info('getAllHijos');
    return this.prisma.hijos.findMany();
  }

  async getHijoById(id: number): Promise<Hijos> {
    logger.info('getHijoById', { id });
    return this.prisma.hijos.findUnique({
      where: {
        codigoHijo: id,
      },
    });
  }

  async createHijo(data:Hijos): Promise<Hijos> {
    return this.prisma.hijos.create({
      data,
    });
  }

  async updateHijo(id: number, data: Hijos): Promise<Hijos> {
    return this.prisma.hijos.update({
      where: {
        codigoHijo: id,
      },
      data,
    });
  }

  async deleteHijo(id: number): Promise<Hijos> {
    return this.prisma.hijos.delete({
      where: {
        codigoHijo: id,
      },
    });
  }
}
