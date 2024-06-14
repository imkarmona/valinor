import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './Controllers/tasks/tasks.controller';
import { ColumnsController } from './Controllers/columns/columns.controller';
import { TasksService } from './Services/tasks/tasks.service';
import { ColumnsService } from './Services/columns/columns.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'kanban.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [TasksController, ColumnsController],
  providers: [TasksService, ColumnsService],
})
export class AppModule {}
