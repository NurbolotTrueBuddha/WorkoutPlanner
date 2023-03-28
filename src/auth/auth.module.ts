import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './controller/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserRepository } from './repository/user.repository';
import { BodyParam } from './entity/body-params.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([User, BodyParam]),
    PassportModule,
    JwtModule.register({
      secret: 'keiz',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  exports: [],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserRepository],
})
export class AuthModule {}