import { IsString, Length, IsOptional, IsEnum } from 'class-validator';

enum VerifyTypes {
    // 短信校验
    SMS = 520,
    // 邮箱校验
    EMAIL = 510,
    // 谷歌校验
    GOOGLE = 540,
}

export class LoginAuthDto {
    @IsString({ message: '账户名必须是字符串类型' })
    readonly username: string;

    @IsString({ message: '密码必须是字符串类型' })
    @Length(6, 18, { message: '密码长度必须是 6 - 18 位' })
    readonly password: string;

    @IsEnum(VerifyTypes, { message: '校验类型不存在' })
    @IsOptional()
    readonly verifyType?: VerifyTypes;

    @IsString({ message: '验证码必须是字符串类型' })
    @Length(6, 6, { message: '验证码长度必须是 6 位' })
    @IsOptional()
    readonly verifyCode?: string;
}
