import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Roles } from 'src/core/decorator/roles.decorator';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TokenResult } from './interfaces/login.interfaces';

@ApiUseTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
    constructor(private readonly authServer: AuthService) {}

    @Post('login')
    @ApiOperation({ title: '用户登录' })
    @ApiResponse({
        status: 200,
        description: '登录的账户令牌和刷新令牌，以及一些其他参数',
    })
    async login(@Body() loginAuthDto: LoginAuthDto): Promise<TokenResult> {
        const data = await this.authServer.login(loginAuthDto);
        return data;
    }

    @Roles('user')
    @Get('test')
    testAuth(@Req() req) {
        return req.user;
    }
}
