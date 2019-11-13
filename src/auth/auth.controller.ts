import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { TokenResult } from './interfaces/login.interfaces';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authServer: AuthService) {}

    @Post('login')
    @ApiOperation({ title: '用户登录' })
    @ApiResponse({
        status: 200,
        description: '登录的账户令牌和刷新令牌，以及一些其他参数',
    })
    login(@Body() loginAuthDto: LoginAuthDto): Promise<TokenResult> {
        const { username, password } = loginAuthDto;
        const data = this.authServer.login(username, password);
        return data;
    }
}
