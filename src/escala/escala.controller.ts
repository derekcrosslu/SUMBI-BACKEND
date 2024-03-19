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
import { EscalaService } from './escala.service';
import { Escala } from '@prisma/client';
import { logger } from './winston.config';


@Controller('escalas')
export class EscalaController {
  constructor(private readonly escalaService: EscalaService) {}
  
  @Get()
  async getAllEscalas() {
    return this.escalaService.getAllEscalas();
  }

  @Get(':id')
  async getEscalaById(@Param('id') id: string) {
    logger.log("id: ", id);
    const clientFound = await this.escalaService.getEscalaById(Number(id));
    if (!clientFound) throw new BadRequestException('Escala does not exist');
    return clientFound;
  }

  @Post()
  async createEscala(@Body() data: Escala) {
    console.log("data: ", data);
    return this.escalaService.createEscala(data);
  }

  @Put(':id')
  async updateEscala(@Param('id') id: string, @Body() data: Escala) {
    try {
      return await this.escalaService.updateEscala(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Escala does not exist');
    }
  }

  @Delete(':id')
  async deleteEscala(@Param('id') id: string) {
    try {
      return await this.escalaService.deleteEscala(Number(id));
    } catch (error) {
      throw new BadRequestException('Escala does not exist');
    }
  }
}
