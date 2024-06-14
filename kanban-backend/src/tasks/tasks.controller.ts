import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  findAllTasks() {
    return 'This action returns all tasks';
  }

  @Get(':id')
  findTaskByID(@Param('id') id: string) {
    return `This action returns a #${id} task`;
  }

  @Post()
  createTask() {
    return 'This action adds a new task';
  }

  @Patch(':id')
  updateTask(@Param('id') id: string) {
    return `This action updates a #${id} task`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return `This action removes a #${id} task`;
  }
}
