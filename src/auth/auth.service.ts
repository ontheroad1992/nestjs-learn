import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login, TokenResult } from './interfaces/login.interfaces';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userServer: UserService, private readonly jwtService: JwtService) {}

    /**
     * 用户登录
     * @param username string
     * @param password string
     */
    async login(username: string, password: string): Promise<TokenResult> {
        const { uuid, roles } = await this.userServer.validateUser(username, password);
        const payload = { username, uuid, roles };
        return {
            username,
            uuid,
            access_token: this.jwtService.sign(payload),
        };
    }
}
