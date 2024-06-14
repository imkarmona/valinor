import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColumnsDto } from 'src/DTO/columns.dto';
import { Columns } from 'src/Entities/columns.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(Columns)
    private columnsRepository: Repository<Columns>,
  ) {}

  async createColumn(columnsDto: ColumnsDto): Promise<Columns> {
    const column = new Columns();
    column.title = columnsDto.title;

    return await this.columnsRepository.save(column);
  }

  async updateColumn(id: number, columnsDto: ColumnsDto): Promise<Columns> {
    const column = await this.columnsRepository.findOne({ where: { id } });
    if (!column) throw new Error('Column not found');

    column.title = columnsDto.title;

    return await this.columnsRepository.save(column);
  }

  async findAll(): Promise<Columns[]> {
    return await this.columnsRepository.find();
  }

  async findOne(id: number): Promise<Columns> {
    return await this.columnsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.columnsRepository.delete(id);
  }
}
