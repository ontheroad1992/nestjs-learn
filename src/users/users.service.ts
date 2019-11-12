import { Injectable } from '@nestjs/common';
import { User, UserValidateResult } from './interfaces/user.interfaces';
import { UserException } from './users.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    /**
     * 校验用户是否正确
     * @param username string 用户名
     * @param pass string 密码
     */
    async validateUser(username: string, pass: string): Promise<UserValidateResult> {
        const user = await this.findUserFromUsername(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        throw new UserException({ code: 20001, message: '登录失败' });
    }

    public async create(username: string, password: string): Promise<any> {
        // const user = await this.findOne(username);
        const users = new Users();
        users.username = username;
        users.password = password;
        await this.usersRepository.save(users);
    }

    public async findUserFromUsername(username: string): Promise<any> {
        const result = await this.usersRepository.findOne({
            where: { username },
        });
        return result;
    }

    public async findAll(): Promise<any> {
        return this.usersRepository.findAndCount();
    }
}
