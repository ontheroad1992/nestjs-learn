import { IsString, IsInt, Matches } from 'class-validator';

export class CreateUserDto {
    @IsString({ message: '用户名必须是字符串类型' })
    readonly username: string;

    @IsString({ message: '密码必须是字符串类型' })
    readonly password: string;

    @Matches(/\d{6}/, { message: '验证码必须是字符串类型' })
    readonly smsCode: string;
}
