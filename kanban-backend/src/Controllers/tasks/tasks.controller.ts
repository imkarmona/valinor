import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksDto } from 'src/DTO/tasks.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  findAllTasks() {
    return 'This action returns all tasks';
  }

  @Get(':id')
  findTaskByID(@Param('id') id: number) {
    return `This action returns a #${id} task`;
  }

  @Post()
  createTask(@Body() newTask: TasksDto) {
    return { message: 'This action adds a new task', task: newTask };
  }

  @Patch(':id')
  updateTask(@Param('id') id: number, @Body() newTask: TasksDto) {
    return { message: `This action updates a #${id} task`, task: newTask };
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return `This action removes a #${id} task`;
  }
}
