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
import { TasksService } from 'src/Services/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAllTasks() {
    return this.taskService.findAllTasks();
  }

  @Get(':id')
  findTaskByID(@Param('id') id: string) {
    return this.taskService.findOneTask(id);
  }

  @Post()
  createTask(@Body() newTask: TasksDto) {
    return this.taskService.createTask(newTask);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() newTask: TasksDto) {
    return this.taskService.updateTask(id, newTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.removeTask(id);
  }
}
