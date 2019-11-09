import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Login } from './interfaces/login.interfaces';

export type User = any;

@Injectable()
export class AuthService {
    private readonly users: User[];

    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

    async login(login: Login) {
        const { username, password } = login;
        const user = await this.userService.validateUser(username, password);
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
