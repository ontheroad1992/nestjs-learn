import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interfaces';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  /**
   * 创建用户
   * @param user 用户数据
   */
  create(user: User) {
    this.users.push(user);
  }

  /** 获取所有用户数据 */
  findAll(): User[] {
    return this.users;
  }
}
