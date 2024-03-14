import { Escala } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class EscalaService {
  constructor(private prisma: PrismaService) {}

  async getAllEscalas(): Promise<Escala[]> {
    logger.info('getAllEscalas');
    return this.prisma.escala.findMany();
  }

  async getEscalaById(id: number): Promise<Escala> {
    logger.info('getEscalaById', { id });
    return this.prisma.escala.findUnique({
      where: {
        codigoEscala: id,
      },
    });
  }

  async createEscala(data: Escala): Promise<Escala> {
    return this.prisma.escala.create({
      data,
    });
  }

  async updateEscala(id: number, data: Escala): Promise<Escala> {
    return this.prisma.escala.update({
      where: {
        codigoEscala: id,
      },
      data,
    });
  }

  async deleteEscala(id: number): Promise<Escala> {
    return this.prisma.escala.delete({
      where: {
        codigoEscala: id,
      },
    });
  }
}
