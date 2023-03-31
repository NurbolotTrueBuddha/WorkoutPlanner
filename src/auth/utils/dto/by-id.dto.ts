import { ApiProperty } from '@nestjs/swagger';

export class ByIdDto {
  @ApiProperty()
  id: string;
}