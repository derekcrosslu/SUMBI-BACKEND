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
import { ReciboService } from './recibo.service';
import { Recibo } from '@prisma/client';
import { logger } from './winston.config';


@Controller('Recibos')
export class ReciboController {
  constructor(private readonly reciboService: ReciboService) {}
  
  @Get()
  async getAllRecibos() {
    return this.reciboService.getAllRecibos();
  }

  @Get(':id')
  async getReciboById(@Param('id') id: string) {
    logger.log("id: ", id);
    const clientFound = await this.reciboService.getReciboById(Number(id));
    if (!clientFound) throw new BadRequestException('Recibo does not exist');
    return clientFound;
  }

  @Post()
  async createRecibo(@Body() data: Recibo) {
    console.log("data: ", data);
    return this.reciboService.createRecibo(data);
  }

  @Put(':id')
  async updateRecibo(@Param('id') id: string, @Body() data: Recibo) {
    try {
      return await this.reciboService.updateRecibo(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Recibo does not exist');
    }
  }

  @Delete(':id')
  async deleteRecibo(@Param('id') id: string) {
    try {
      return await this.reciboService.deleteRecibo(Number(id));
    } catch (error) {
      throw new BadRequestException('Recibo does not exist');
    }
  }
}
