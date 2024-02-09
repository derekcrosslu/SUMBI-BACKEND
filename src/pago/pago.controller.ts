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
import { PagoService } from './pago.sevice';
import { Pago } from '@prisma/client';
import { logger } from './winston.config';


@Controller('pagos')
export class PagoController {
  constructor(private readonly pagoService: PagoService) {}
  
  @Get()
  async getAllPagos() {
    return this.pagoService.getAllPagos();
  }

  @Get(':id')
  async getPagoById(@Param('id') id: string) {
    logger.log("id: ", id);
    const pagoFound = await this.pagoService.getPagoById(Number(id));
    if (!pagoFound) throw new BadRequestException('Pago does not exist');
    return pagoFound;
  }

  @Post()
  async createPago(@Body() data: Pago) {
    console.log("data: ", data);
    return this.pagoService.createPago(data);
  }

  @Put(':id')
  async updatePago(@Param('id') id: string, @Body() data: Pago) {
    try {
      return await this.pagoService.updatePago(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Pago does not exist');
    }
  }

  @Delete(':id')
  async deletePago(@Param('id') id: string) {
    try {
      return await this.pagoService.deletePago(Number(id));
    } catch (error) {
      throw new BadRequestException('Pago does not exist');
    }
  }
}
