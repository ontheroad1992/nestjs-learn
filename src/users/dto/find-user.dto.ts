import { ApiModelProperty } from '@nestjs/swagger';
import { Matches, IsString } from 'class-validator';

export class FindUserDto {
    @ApiModelProperty({ description: '账户名必须是手机号且为字符串类型', pattern: '/^1[3456789]d{9}$/' })
    @Matches(/^1[3456789]\d{9}$/, { message: '手机格式不正确' })
    @IsString({ message: '账户名必须是字符串类型' })
    readonly username: string;
}
