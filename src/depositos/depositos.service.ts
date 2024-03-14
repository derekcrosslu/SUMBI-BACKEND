

import { Deposito } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
// import { logger } from './winston.config';

@Injectable()
export class DepositosService {
  constructor(private prisma: PrismaService) {}

  async getAllDepositos(): Promise<Deposito[]> {
    // logger.info('getAllDepositoss');
    return this.prisma.deposito.findMany();
  }

  async getDepositosById(id: number): Promise<Deposito> {
    // logger.info('getDepositosById', { id });
    return this.prisma.deposito.findUnique({
      where: {
        codigoDeposito: id,
      },
    });
  }

  async createDepositos(data: Deposito): Promise<Deposito> {
    return this.prisma.deposito.create({
      data,
    });
  }

  async updateDepositos(id: number, data: Deposito): Promise<Deposito> {
    return this.prisma.deposito.update({
      where: {
        codigoDeposito: id,
      },
      data,
    });
  }

  async deleteDepositos(id: number): Promise<Deposito> {
    return this.prisma.deposito.delete({
      where: {
        codigoDeposito: id,
      },
    });
  }
}
