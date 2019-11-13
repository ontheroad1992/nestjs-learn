import { Injectable } from '@nestjs/common';
import { UserException } from './users.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    /**
     * 校验用户是否正确
     * @param username 用户名
     * @param pass 密码
     */
    async validateUser(username: string, pass: string): Promise<Users> {
        const user = await this.findUserFromUsername(username);
        if (!user) {
            throw new UserException({ code: 20003, message: '用户不存在' });
        }
        // 密码加密核对
        const validateResult = bcrypt.compareSync(pass, user.password);
        if (validateResult) {
            return user;
        }
        throw new UserException({ code: 20001, message: '登录失败' });
    }

    /**
     * 创建用户
     * @param username 用户名
     * @param password 密码
     */
    public async create(username: string, password: string): Promise<any> {
        const user = await this.findUserFromUsername(username);
        if (user) {
            throw new UserException({ code: 20002, message: '用户已经存在' });
        }
        const users = new Users();
        users.username = username;
        // 密码加密
        const salt = bcrypt.genSaltSync(10);
        users.password = bcrypt.hashSync(password, salt);
        users.role = ['user'];
        await this.usersRepository.save(users);
    }

    /**
     * 根据用户名查找用户信息
     * @param username 用户名
     */
    public async findUserFromUsername(username: string): Promise<Users> {
        const result = await this.usersRepository.findOne({
            where: { username },
        });
        return result;
    }

    public async findAll(): Promise<any> {
        return this.usersRepository.findAndCount();
    }
}
