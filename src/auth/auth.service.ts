import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login, TokenResult } from './interfaces/login.interfaces';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

    async login(login: Login): Promise<TokenResult> {
        const { username, password } = login;
        const user = await this.userService.validateUser(username, password);
        const payload = { username: user.username, userId: user.user_id, roles: ['user'] };
        return {
            ...user,
            access_token: this.jwtService.sign(payload),
        };
    }
}
