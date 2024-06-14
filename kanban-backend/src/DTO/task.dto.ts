import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class TaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUUID()
  @IsOptional()
  columnId?: string;
}
