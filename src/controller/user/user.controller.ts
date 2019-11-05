import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto'

@Controller('user')
export class UserController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): object {
    return createUserDto
  }
}
