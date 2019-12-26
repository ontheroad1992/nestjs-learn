import { IsString, IsInt, Matches, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty({ description: '账户名必须是手机号且为字符串类型', pattern: '/^1[3456789]\d{9}$/' })
    @Matches(/^1[3456789]\d{9}$/, { message: '手机格式不正确' })
    @IsString({ message: '账户名必须是字符串类型' })
    readonly username: string;

    @ApiModelProperty({ description: '密码长度必须是 6 - 18 位' })
    @IsString({ message: '密码必须是字符串类型' })
    @Length(6, 18, { message: '密码长度必须是 6 - 18 位' })
    readonly password: string;

    @ApiModelProperty({ description: '验证码必须是字符串类型，长度为6', pattern: '/\d{6}/' })
    @Matches(/\d{6}/, { message: '验证码必须是字符串类型，长度为6' })
    readonly smsCode: string;
}
