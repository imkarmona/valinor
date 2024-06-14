import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './Controllers/tasks/tasks.controller';
import { ColumnsController } from './Controllers/columns/columns.controller';

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
  providers: [],
})
export class AppModule {}
