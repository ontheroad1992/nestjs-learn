import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';

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
