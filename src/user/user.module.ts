import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BodyParam } from './entity/body-params.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([BodyParam])],
    exports: [],
    controllers: [],
    providers: [],
  })
  export class UserModule {}