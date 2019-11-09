import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Roles } from 'src/core/decorator/roles.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authServer: AuthService) {}

    @Post('login')
    async login(@Body() loginAuthDto: LoginAuthDto) {
        return this.authServer.login(loginAuthDto);
    }

    @Roles('user')
    @Get('test')
    testAuth(@Req() req) {
        return req.user;
    }
}
