import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Calories } from './result/entity/calories.entity';
import { Result } from './result/entity/result.entity';
import { Water } from './result/entity/water.entity';
import { BodyParam } from './user/entity/body-params.entity';
import { Dream } from './result/entity/dream.entity';
import { Step } from './result/entity/step.entity';
import { User } from './auth/entity/user.entity';
import { Weight } from './result/entity/weight.entity';
import { ResultModule } from './result/result.module';
import{UserModule} from './user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'keiz',
      database: 'wplanner',
      entities: [User, Calories, Result, BodyParam, Water, Dream, Step, Weight],
      synchronize: true,
      logging: true
    }),
    AuthModule, 
    ResultModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
