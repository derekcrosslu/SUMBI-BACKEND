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
import { NotaService } from './nota.service';
import { Nota } from '@prisma/client';
import { logger } from './winston.config';


@Controller('Notas')
export class NotaController {
  constructor(private readonly NotaService: NotaService) {}
  
  @Get()
  async getAllNotas() {
    return this.NotaService.getAllNotas();
  }

  @Get(':id')
  async getNotaById(@Param('id') id: string) {
    logger.log("id: ", id);
    const clientFound = await this.NotaService.getNotaById(Number(id));
    if (!clientFound) throw new BadRequestException('Nota does not exist');
    return clientFound;
  }

  @Post()
  async createNota(@Body() data: Nota) {
    console.log("data: ", data);
    return this.NotaService.createNota(data);
  }

  @Put(':id')
  async updateNota(@Param('id') id: string, @Body() data: Nota) {
    try {
      return await this.NotaService.updateNota(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Nota does not exist');
    }
  }

  @Delete(':id')
  async deleteNota(@Param('id') id: string) {
    try {
      return await this.NotaService.deleteNota(Number(id));
    } catch (error) {
      throw new BadRequestException('Nota does not exist');
    }
  }
}
