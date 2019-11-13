import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login, TokenResult } from './interfaces/login.interfaces';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

    /**
     * 用户登录
     * @param username string
     * @param password string
     */
    async login(username: string, password: string): Promise<TokenResult> {
        const { uuid, role } = await this.userService.validateUser(username, password);
        const payload = { username, uuid, role };
        return {
            username,
            uuid,
            access_token: this.jwtService.sign(payload),
        };
    }
}
