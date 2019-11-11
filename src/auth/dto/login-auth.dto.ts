import { IsString, Length, IsOptional, IsEnum, Matches } from 'class-validator';
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
    @ApiModelProperty({ description: '账户名必须是手机号且为字符串类型', pattern: '/^1[3456789]\d{9}$/' })
    @Matches(/^1[3456789]\d{9}$/, { message: '手机格式不正确' })
    @IsString({ message: '账户名必须是字符串类型' })
    readonly username: string;

    @ApiModelProperty({ description: '密码长度必须是 6 - 18 位' })
    @IsString({ message: '密码必须是字符串类型' })
    @Length(6, 18, { message: '密码长度必须是 6 - 18 位' })
    readonly password: string;

    @ApiModelProperty({ enum: [510, 520, 540], required: false })
    @IsEnum(VerifyTypes, { message: '校验类型不存在' })
    @IsOptional()
    readonly verifyType?: VerifyTypes;

    @ApiModelProperty({ description: '验证码长度必须是 6 位', required: false })
    @IsString({ message: '验证码必须是字符串类型' })
    @Length(6, 6, { message: '验证码长度必须是 6 位' })
    @IsOptional()
    readonly verifyCode?: string;
}
