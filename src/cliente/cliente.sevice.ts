import { Cliente } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { logger } from './winston.config';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async getAllClientes(): Promise<Cliente[]> {
    logger.info('getAllClientes');
    return this.prisma.cliente.findMany();
  }

  async getClienteById(id: number): Promise<Cliente> {
    logger.info('getClienteById', { id });
    return this.prisma.cliente.findUnique({
      where: {
        codigoCliente: id,
      },
      
      include: {
        hijos: true,
        pago: {
          include: {
            depositos: true,
          },
        },
      }
    });
  }

  async createCliente(data: Cliente): Promise<Cliente> {
    return this.prisma.cliente.create({
      data,
    });
  }

  async updateCliente(id: number, data: Cliente): Promise<Cliente> {
    return this.prisma.cliente.update({
      where: {
        codigoCliente: id,
      },
      data,
    });
  }

  async deleteCliente(id: number): Promise<Cliente> {
    return this.prisma.cliente.delete({
      where: {
        codigoCliente: id,
      },
    });
  }
}
