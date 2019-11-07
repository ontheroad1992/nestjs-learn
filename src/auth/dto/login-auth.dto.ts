import { IsString, Length } from 'class-validator';

export class LoginAuthDto {
    @IsString({ message: '账户名必须是字符串类型' })
    readonly username: string;

    @IsString({ message: '密码必须是字符串类型' })
    @Length(6, 18, { message: '密码长度必须是 6 - 18 位' })
    readonly password: string;
}
