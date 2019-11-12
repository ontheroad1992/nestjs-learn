import { Controller, Post, Body, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interfaces';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FindUserDto } from './dto/find-user.dto';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersServer: UsersService) {}

    @Post()
    @HttpCode(201)
    @ApiOperation({ title: '用户注册' })
    @ApiResponse({
        status: 201,
        description: '',
    })
    async create(@Body() createUserDto: CreateUserDto) {
        const { username, password } = createUserDto;
        await this.usersServer.create(username, password);
    }

    @Post('/check')
    @ApiOperation({ title: '检查用户是否被注册过' })
    @ApiResponse({
        status: 200,
        description: '',
    })
    check(@Body() findUserDto: FindUserDto) {
        const username = findUserDto.username;
        return this.usersServer.findUserFromUsername(username);
    }
}
