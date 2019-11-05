import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from '../../server/user/user.service';
import { User } from '../../interfaces/user.interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userServer: UserService) {}

  @Post()
  @HttpCode(201)
  createUser(@Body() createUserDto: CreateUserDto): void {
    this.userServer.create(createUserDto);
  }
}
