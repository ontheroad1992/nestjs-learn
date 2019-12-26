import { ApiModelProperty } from '@nestjs/swagger';
import { Matches, IsString } from 'class-validator';

export class FindUserDto {
    @ApiModelProperty({ description: 'uuid 必须是字符串类型'})
    @IsString({ message: 'uuid 必须是字符串类型' })
    readonly uuid: string;
}
