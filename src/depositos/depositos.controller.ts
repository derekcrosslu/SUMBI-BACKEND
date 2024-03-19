
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
import { DepositosService } from './depositos.service';
import { Deposito } from '@prisma/client';
// import { logger } from './winston.config';
// 

@Controller('depositos')
export class DepositosController {
  constructor(private readonly depositoService: DepositosService) {}
  
  @Get()
  async getAllDepositos() {
    return this.depositoService.getAllDepositos();
  }

  @Get(':id')
  async getDepositoById(@Param('id') id: string) {
    // logger.log("id: ", id);
    const DepositoFound = await this.depositoService.getDepositosById(Number(id));
    if (!DepositoFound) throw new BadRequestException('Deposito does not exist');
    return DepositoFound;
  }

  @Post()
  async createDeposito(@Body() data: Deposito) {
    console.log("data: ", data);
    return this.depositoService.createDepositos(data);
  }

  @Put(':id')
  async updateDeposito(@Param('id') id: string, @Body() data: Deposito) {
    try {
      return await this.depositoService.updateDepositos(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Deposito does not exist');
    }
  }

  @Delete(':id')
  async deleteDeposito(@Param('id') id: string) {
    try {
      return await this.depositoService.deleteDepositos(Number(id));
    } catch (error) {
      throw new BadRequestException('Deposito does not exist');
    }
  }
}
