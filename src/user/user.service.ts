import { Injectable, ForbiddenException } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    public create(user: User) {
        this.users.push(user);
    }

    public async findAll(): Promise<User[]> {
        return this.users;
    }
}
