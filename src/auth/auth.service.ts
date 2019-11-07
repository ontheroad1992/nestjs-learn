import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

export type User = any;

@Injectable()
export class AuthService {
    private readonly users: User[];

    constructor(private readonly userService: UsersService) {}

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
