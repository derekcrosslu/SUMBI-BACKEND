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
import { ConceptoService } from './concepto.service';
import { Concepto } from '@prisma/client';
import { logger } from './winston.config';


@Controller('conceptos')
export class ConceptoController {
  constructor(private readonly ConceptoService: ConceptoService) {}
  
  @Get()
  async getAllConceptos() {
    return this.ConceptoService.getAllConceptos();
  }

  @Get(':id')
  async getConceptoById(@Param('id') id: string) {
    logger.log("id: ", id);
    const clientFound = await this.ConceptoService.getConceptoById(Number(id));
    if (!clientFound) throw new BadRequestException('Concepto does not exist');
    return clientFound;
  }

  @Post()
  async createConcepto(@Body() data: Concepto) {
    console.log("data: ", data);
    return this.ConceptoService.createConcepto(data);
  }

  @Put(':id')
  async updateConcepto(@Param('id') id: string, @Body() data: Concepto) {
    try {
      return await this.ConceptoService.updateConcepto(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Concepto does not exist');
    }
  }

  @Delete(':id')
  async deleteConcepto(@Param('id') id: string) {
    try {
      return await this.ConceptoService.deleteConcepto(Number(id));
    } catch (error) {
      throw new BadRequestException('Concepto does not exist');
    }
  }
}
