import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Logger,
  LoggerService
} from '@nestjs/common';
import { ClienteService } from './cliente.sevice';
import { Cliente } from '@prisma/client';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async getAllClientes() {
    return this.clienteService.getAllClientes();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    Logger.log("id: ", id);
    const clientFound = await this.clienteService.getClienteById(Number(id));
    if (!clientFound) throw new BadRequestException('Task does not exist');
    return clientFound;
  }

  @Post()
  async createCliente(@Body() data: Cliente) {
    console.log("data: ", data);
    return this.clienteService.createCliente(data);
  }

  // @Put(':id')
  // async updateTask(@Param('id') id: string, @Body() data: Cliente) {
  //   try {
  //     return await this.taskService.updateTask(Number(id), data);
  //   } catch (error) {
  //     throw new BadRequestException('Task does not exist');
  //   }
  // }

  // @Delete(':id')
  // async deleteTask(@Param('id') id: string) {
  //   try {
  //     return await this.taskService.deleteTask(Number(id));
  //   } catch (error) {
  //     throw new BadRequestException('Task does not exist');
  //   }
  // }
}
