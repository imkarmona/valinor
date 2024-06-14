import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks/tasks.controller';
import { ColumnsController } from './columns/columns.controller';

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
