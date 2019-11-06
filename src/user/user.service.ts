import { Injectable, ForbiddenException } from '@nestjs/common';
import { User } from './interfaces/user.interfaces';
import { UserException } from 'src/exception/self-error';

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    public create(user: User) {
        throw new UserException();
        this.users.push(user);
    }

    public async findAll(): Promise<User[]> {
        throw new ForbiddenException();
        return this.users;
    }
}
