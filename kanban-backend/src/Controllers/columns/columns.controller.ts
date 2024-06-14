import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColumnsDto } from 'src/DTO/columns.dto';

@Controller('columns')
export class ColumnsController {
  @Get()
  findAllColumns() {
    return 'This action returns all columns';
  }

  @Get(':id')
  findColumnByID(@Param('id') id: number) {
    return `This action returns a #${id} column`;
  }

  @Post()
  createColumn(@Body() newColumn: ColumnsDto) {
    return { message: 'This action adds a new column', column: newColumn };
  }

  @Patch(':id')
  updateColumn(@Param('id') id: number, @Body() newColumn: ColumnsDto) {
    return {
      message: `This action updates a #${id} column`,
      column: newColumn,
    };
  }

  @Delete(':id')
  deleteColumn(@Param('id') id: number) {
    return `This action deletes a #${id} column`;
  }
}
