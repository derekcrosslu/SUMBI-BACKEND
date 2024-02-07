import { Cliente } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Cliente[]> {
    return this.prisma.cliente.findMany();
  }

  // async getTaskById(id: number): Promise<Task> {
  //   return this.prisma.task.findUnique({
  //     where: {
  //       id: id,
  //     },
  //   });
  // }

  // async createTask(data: Cliente): Promise<Cliente> {
  //   return this.prisma.task.create({
  //     data,
  //   });
  // }

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
