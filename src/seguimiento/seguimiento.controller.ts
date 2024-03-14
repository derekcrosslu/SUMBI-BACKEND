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
  LoggerService,
  ArgumentsHost,
  Catch,
  ParamData
} from '@nestjs/common';
import { SeguimientoService } from './seguimiento.service';
import { Seguimiento } from '@prisma/client';
import { logger } from './winston.config';


@Controller('Seguimientos')
export class SeguimientoController {
  constructor(private readonly SeguimientoService: SeguimientoService) {}
  
  @Get()
  async getAllSeguimientos() {
    return this.SeguimientoService.getAllSeguimientos();
  }

  @Get(':id')
  async getSeguimientoById(@Param('id') id: string) {
    logger.log("id: ", id);
    const clientFound = await this.SeguimientoService.getSeguimientoById(Number(id));
    if (!clientFound) throw new BadRequestException('Seguimiento does not exist');
    return clientFound;
  }

  @Post()
  async createSeguimiento(@Body() data: Seguimiento) {
    console.log("data: ", data);
    return this.SeguimientoService.createSeguimiento(data);
  }

  @Put(':id')
  async updateSeguimiento(@Param('id') id: string, @Body() data: Seguimiento) {
    try {
      return await this.SeguimientoService.updateSeguimiento(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Seguimiento does not exist');
    }
  }

  @Delete(':id')
  async deleteSeguimiento(@Param('id') id: string) {
    try {
      return await this.SeguimientoService.deleteSeguimiento(Number(id));
    } catch (error) {
      throw new BadRequestException('Seguimiento does not exist');
    }
  }
}
