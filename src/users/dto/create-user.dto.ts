import { IsString, IsInt, Matches } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    @IsString({ message: '用户名必须是字符串类型' })
    readonly username: string;

    @ApiModelProperty()
    @IsString({ message: '密码必须是字符串类型' })
    readonly password: string;

    @ApiModelProperty()
    @Matches(/\d{6}/, { message: '验证码必须是字符串类型' })
    readonly smsCode: string;
}
