import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weight } from './entity/weight.entity';
import { Dream } from './entity/dream.entity';
import { Step } from './entity/step.entity';
import { Water } from './entity/water.entity';
import { Calories } from './entity/calories.entity';
import { Result } from './entity/result.entity';


@Module({
    imports: [
      TypeOrmModule.forFeature([Weight, Dream, Step, Water, Calories, Result])],
    exports: [],
    controllers: [],
    providers: [],
  })
  export class ResultModule {}
  