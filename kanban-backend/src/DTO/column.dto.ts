import { IsString, IsNotEmpty } from 'class-validator';

export class ColumnDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
