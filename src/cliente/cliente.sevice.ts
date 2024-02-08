import { Cliente } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async getAllClientes(): Promise<Cliente[]> {
    return this.prisma.cliente.findMany();
  }

  async getClienteById(id: number): Promise<Cliente> {
    console.log("id: ", id);
    return this.prisma.cliente.findUnique({
      where: {
        codigoCliente: id,
      },
    });
  }

  async createCliente(data: Cliente): Promise<Cliente> {
    return this.prisma.cliente.create({
      data,
    });
  }

  // async updateTask(id: number, data: Cliente): Promise<Cliente> {
  //   return this.prisma.task.update({
  //     where: {
  //       id: id,
  //     },
  //     data,
  //   });
  // }

  // async deleteTask(id: number): Promise<Cliente> {
  //   return this.prisma.task.delete({
  //     where: {
  //       id: id,
  //     },
  //   });
  // }
}
