import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';
import { UserException } from './users.exception';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
            {
                userId: 4,
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
    async validateUser(username: string, pass: string): Promise<any> {
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

    public create(user: User) {
        this.users.push(user);
    }

    public async findAll(): Promise<User[]> {
        return this.users;
    }
}
