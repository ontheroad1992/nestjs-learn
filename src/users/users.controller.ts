import { Controller, Post, Body, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interfaces';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

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

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersServer.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id) {
        return id;
    }
}
