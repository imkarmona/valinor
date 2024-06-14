import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ColumnDto } from 'src/DTO/column.dto';

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
  createColumn(@Body() newColumn: ColumnDto) {
    return { message: 'This action adds a new column', column: newColumn };
  }

  @Patch(':id')
  updateColumn(@Param('id') id: string, @Body() newColumn: ColumnDto) {
    return {
      message: `This action updates a #${id} column`,
      column: newColumn,
    };
  }

  @Delete(':id')
  deleteColumn(@Param('id') id: string) {
    return `This action deletes a #${id} column`;
  }
}
