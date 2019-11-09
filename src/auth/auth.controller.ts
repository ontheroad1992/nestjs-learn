import { Controller, Post, Request, UseGuards, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authServer: AuthService) {}

    @Post('login')
    async login(@Body() loginAuthDto: LoginAuthDto) {
        return this.authServer.login(loginAuthDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
