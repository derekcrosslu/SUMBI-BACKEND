import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Put,
  Logger,
  LoggerService,
  ArgumentsHost,
  Catch,
  ParamData
} from '@nestjs/common';
import { ClienteService } from './cliente.sevice';
import { Cliente } from '@prisma/client';
import { logger } from './winston.config';


@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}
  
  @Get()
  async getAllClientes() {
    return this.clienteService.getAllClientes();
  }

  @Get(':id')
  async getClienteById(@Param('id') id: string) {
    logger.log("id: ", id);
    const clientFound = await this.clienteService.getClienteById(Number(id));
    if (!clientFound) throw new BadRequestException('Cliente does not exist');
    return clientFound;
  }

  @Post()
  async createCliente(@Body() data: Cliente) {
    console.log("data: ", data);
    return this.clienteService.createCliente(data);
  }

  @Patch(':id')
  async updateCliente(@Param('id') id: string, @Body() data: Cliente) {
    try {
      return await this.clienteService.updateCliente(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Cliente does not exist');
    }
  }

  @Delete(':id')
  async deleteCliente(@Param('id') id: string) {
    console.log("id: ", id);
    try {
      return await this.clienteService.deleteCliente(Number(id));
    } catch (error) {
      throw new BadRequestException('Cliente does not exist');
    }
  }
}
