import { IsString, Length, IsOptional, IsEnum } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

enum VerifyTypes {
    // 短信校验
    SMS = 520,
    // 邮箱校验
    EMAIL = 510,
    // 谷歌校验
    GOOGLE = 540,
}

export class LoginAuthDto {
    @ApiModelProperty()
    @IsString({ message: '账户名必须是字符串类型' })
    readonly username: string;

    @ApiModelProperty()
    @IsString({ message: '密码必须是字符串类型' })
    @Length(6, 18, { message: '密码长度必须是 6 - 18 位' })
    readonly password: string;

    @ApiModelProperty({ enum: [510, 520, 540] })
    @IsEnum(VerifyTypes, { message: '校验类型不存在' })
    @IsOptional()
    readonly verifyType?: VerifyTypes;

    @IsString({ message: '验证码必须是字符串类型' })
    @Length(6, 6, { message: '验证码长度必须是 6 位' })
    @IsOptional()
    readonly verifyCode?: string;
}
