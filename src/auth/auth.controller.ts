import { Controller, Post, Request, Req, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authServer: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() loginAuthDto: LoginAuthDto) {
        return this.authServer.login(loginAuthDto);
    }
}
