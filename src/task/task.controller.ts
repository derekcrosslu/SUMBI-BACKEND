import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.sevice';
import { Cliente } from '@prisma/client';

@Controller('clientes')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  // @Get(':id')
  // async getTaskById(@Param('id') id: string) {
  //   const taskFound = await this.taskService.getTaskById(Number(id));
  //   if (!taskFound) throw new BadRequestException('Task does not exist');
  //   return taskFound;
  // }

  // @Post()
  // async createTask(@Body() data: Cliente) {
  //   console.log("data: ", data);
  //   return this.taskService.createTask(data);
  // }

  // @Put(':id')
  // async updateTask(@Param('id') id: string, @Body() data: Cliente) {
  //   try {
  //     return await this.taskService.updateTask(Number(id), data);
  //   } catch (error) {
  //     throw new BadRequestException('Task does not exist');
  //   }
  // }

  // @Delete(':id')
  // async deleteTask(@Param('id') id: string) {
  //   try {
  //     return await this.taskService.deleteTask(Number(id));
  //   } catch (error) {
  //     throw new BadRequestException('Task does not exist');
  //   }
  // }
}