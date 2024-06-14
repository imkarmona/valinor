import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksDto } from 'src/DTO/tasks.dto';
import { Tasks } from 'src/Entities/tasks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  async createTask(taskDto: TasksDto): Promise<Tasks> {
    const task = new Tasks();
    task.title = taskDto.title;
    task.description = taskDto.description;
    task.columnId = taskDto.columnId;

    return await this.tasksRepository.save(task);
  }

  async update(id: number, taskDto: TasksDto): Promise<Tasks> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new Error('Task not found');
    }

    task.title = taskDto.title;
    task.description = taskDto.description;
    task.columnId = taskDto.columnId;

    return await this.tasksRepository.save(task);
  }

  async findAll(): Promise<Tasks[]> {
    return await this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Tasks> {
    return await this.tasksRepository.findOne({ where: { id } });
  }

  async removeTask(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
