import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './Controllers/tasks/tasks.controller';
import { ColumnsController } from './Controllers/columns/columns.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [TasksController, ColumnsController],
  providers: [],
})
export class AppModule {}
