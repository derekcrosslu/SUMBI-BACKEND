import { Nota } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class NotaService {
  constructor(private prisma: PrismaService) {}

  async getAllNotas(): Promise<Nota[]> {
    logger.info('getAllNotas');
    return this.prisma.nota.findMany();
  }

  async getNotaById(id: number): Promise<Nota> {
    logger.info('getNotaById', { id });
    return this.prisma.nota.findUnique({
      where: {
        codigoNota: id,
      },
    });
  }

  async createNota(data: Nota): Promise<Nota> {
    return this.prisma.nota.create({
      data,
    });
  }

  async updateNota(id: number, data: Nota): Promise<Nota> {
    return this.prisma.nota.update({
      where: {
        codigoNota: id,
      },
      data,
    });
  }

  async deleteNota(id: number): Promise<Nota> {
    return this.prisma.nota.delete({
      where: {
        codigoNota: id,
      },
    });
  }
}
