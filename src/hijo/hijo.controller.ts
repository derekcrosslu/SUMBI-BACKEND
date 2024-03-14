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
import { HijoService } from './hijo.sevice';
import { Cliente, Hijos } from '@prisma/client';
import { logger } from './winston.config';


@Controller('hijos')
export class HijoController {
  constructor(private readonly hijoService: HijoService) {}
  
  @Get()
  async getAllHijos() {
    return this.hijoService.getAllHijos();
  }

  @Get(':id')
  async getHijoById(@Param('id') id: string) {
    logger.log("id: ", id);
    const clientFound = await this.hijoService.getHijoById(Number(id));
    if (!clientFound) throw new BadRequestException('Hijo does not exist');
    return clientFound;
  }

  @Post()
  async createHijo(@Body() data: Hijos) {
    console.log("data: ", data);
    return this.hijoService.createHijo(data);
  }

  @Put(':id')
  async updateHijo(@Param('id') id: string, @Body() data: Hijos) {
    try {
      return await this.hijoService.updateHijo(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Hijo does not exist');
    }
  }

  @Delete(':id')
  async deleteHijo(@Param('id') id: string) {
    try {
      return await this.hijoService.deleteHijo(Number(id));
    } catch (error) {
      throw new BadRequestException('Hijo does not exist');
    }
  }
}
