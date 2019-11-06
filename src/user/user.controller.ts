import { Controller, Post, Body, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interfaces';

@Controller('user')
export class UserController {
    constructor(private readonly userServer: UserService) {}

    @Post()
    @HttpCode(201)
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
