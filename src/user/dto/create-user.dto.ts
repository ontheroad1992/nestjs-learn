import { IsString } from 'class-validator';

export class CreateUserDto {
    @IsString({ message: '用户名必须是字符串类型' })
    readonly username: string;

    @IsString({ message: '用户名必须是字符串类型' })
    readonly password: string;
}
