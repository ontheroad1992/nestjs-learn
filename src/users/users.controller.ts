import { Controller, Post, Body, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interfaces';
import { Roles } from 'src/core/decorator/roles.decorator';

@Controller('users')
export class UsersController {
    constructor(private readonly userServer: UsersService) {}

    @Post()
    @HttpCode(201)
    @Roles('user')
    async create(@Body() createUserDto: CreateUserDto) {
        this.userServer.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userServer.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id) {
        return id;
    }
}
