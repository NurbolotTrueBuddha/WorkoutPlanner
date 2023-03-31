// import { Controller, Request, Body, Post, UseGuards } from '@nestjs/common';
// import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
// import { LocalAuthGuard } from 'src/auth/strategy/local-auth.guard';
// import { AuthService } from 'src/auth/service/auth.service';
// import { AccessTokenDto } from 'src/auth/utils/dto/access-token.dto';
// import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';

// @ApiTags('Auth')
// @Controller()
// export class AuthController {

//   constructor(
//     private authService: AuthService,
//     private userRepository: UserRepository
//   ) {}


//   @ApiResponse({ status: 200, type: RegisterDto })
//   @Post('auth/register')
//   async registration(@Body() registerData: RegisterDto) {
//     return await this.authService.registerUser(registerData);
//   }

//   @ApiResponse({ status: 200, type: AccessTokenDto })
//   @UseGuards(LocalAuthGuard)
//   @Post('auth/login')
//   async login(@Request() req, @Body() loginData: LoginDto) {
//     return this.authService.login(req.user) // {access_token}
//   }
  
//   @ApiBearerAuth()
//   @ApiResponse({ status: 200, type: BodyParamsDto })
//   @UseGuards(JwtAuthGuard)
//   @Post('auth/body-params')
//   async addBodyParams(@Request() req, @Body() params: BodyParamsDto) {

//     params.user_id = req.user.userId

//     return await this.userRepository.addBodyParams(params);

//   }
// }