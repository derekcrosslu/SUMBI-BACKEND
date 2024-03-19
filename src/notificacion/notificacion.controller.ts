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
import { NotificacionService } from './notificacion.service';
import { Notificacion } from '@prisma/client';
import { logger } from './winston.config';


@Controller('notificacions')
export class NotificacionController {
  constructor(private readonly notificacionService: NotificacionService) {}
  
  @Get()
  async getAllNotificacions() {
    return this.notificacionService.getAllNotificacions();
  }

  @Get(':id')
  async getNotificacionById(@Param('id') id: string) {
    logger.log("id: ", id);
    const clientFound = await this.notificacionService.getNotificacionById(Number(id));
    if (!clientFound) throw new BadRequestException('Notificacion does not exist');
    return clientFound;
  }

  @Post()
  async createNotificacion(@Body() data: Notificacion) {
    console.log("data: ", data);
    return this.notificacionService.createNotificacion(data);
  }

  @Put(':id')
  async updateNotificacion(@Param('id') id: string, @Body() data: Notificacion) {
    try {
      return await this.notificacionService.updateNotificacion(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Notificacion does not exist');
    }
  }

  @Delete(':id')
  async deleteNotificacion(@Param('id') id: string) {
    try {
      return await this.notificacionService.deleteNotificacion(Number(id));
    } catch (error) {
      throw new BadRequestException('Notificacion does not exist');
    }
  }
}
