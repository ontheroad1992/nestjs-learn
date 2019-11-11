import { Injectable } from '@nestjs/common';
import { User, UserValidateResult } from './interfaces/user.interfaces';
import { UserException } from './users.exception';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    constructor() {
        this.users = [
            {
                user_id: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                user_id: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                user_id: 3,
                username: '17612732670',
                password: '123456',
            },
            {
                user_id: 4,
                username: 'pengshba',
                password: '123456',
            },
        ];
    }

    /**
     * 校验用户是否正确
     * @param username string 用户名
     * @param pass string 密码
     */
    async validateUser(username: string, pass: string): Promise<UserValidateResult> {
        const user = await this.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        throw new UserException({ code: 20001, message: '登录失败' });
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    public create(user: any) {
        this.users.push(user);
    }

    public async findAll(): Promise<User[]> {
        return this.users;
    }
}
