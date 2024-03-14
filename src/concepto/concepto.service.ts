import { Concepto } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class ConceptoService {
  constructor(private prisma: PrismaService) {}

  async getAllConceptos(): Promise<Concepto[]> {
    logger.info('getAllConceptos');
    return this.prisma.concepto.findMany();
  }

  async getConceptoById(id: number): Promise<Concepto> {
    logger.info('getConceptoById', { id });
    return this.prisma.concepto.findUnique({
      where: {
        codigoConcepto: id,
      },
    });
  }

  async createConcepto(data: Concepto): Promise<Concepto> {
    return this.prisma.concepto.create({
      data,
    });
  }

  async updateConcepto(id: number, data: Concepto): Promise<Concepto> {
    return this.prisma.concepto.update({
      where: {
        codigoConcepto: id,
      },
      data,
    });
  }

  async deleteConcepto(id: number): Promise<Concepto> {
    return this.prisma.concepto.delete({
      where: {
        codigoConcepto: id,
      },
    });
  }
}
