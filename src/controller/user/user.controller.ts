import { Controller, Get, Req, Post, HttpCode, Res, Redirect, Query } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  @Get()
  findUser(): string {
    return 'this is user api';
  }

  @Get('req')
  findReq(@Req() request: Request): string {
    // console.log(request);
    // console.log('this is req');
    return 'this is req';
  }

  @Post()
  @HttpCode(204)
  create(@Res() response: Response): string {
    // console.log()
    response.send('this is http code 204');
    return 'this is http code 200';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('ver') ver: string): string | object {
    console.log(ver, 'sss');
    if (ver && ver === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    } else {
      return '版本不存在';
    }
  }
}
