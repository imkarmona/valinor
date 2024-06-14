import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('columns')
export class ColumnsController {
  @Get()
  findAllColumns() {
    return 'This action returns all columns';
  }

  @Get(':id')
  findColumnByID(@Param('id') id: string) {
    return `This action returns a #${id} column`;
  }

  @Post()
  createColumn() {
    return 'This action adds a new column';
  }

  @Patch(':id')
  updateColumn(@Param('id') id: string) {
    return `This action updates a #${id} column`;
  }

  @Delete(':id')
  deleteColumn(@Param('id') id: string) {
    return `This action deletes a #${id} column`;
  }
}
