import { IsString, Length, IsOptional } from 'class-validator';

export class CreatePhotoDto {
    @IsString({ message: '照片名必须是字符串类型' })
    @Length(1, 100, { message: '照片名长度应该为1-100' })
    readonly name: string;

    @IsString({ message: '描述必须是字符串类型' })
    readonly description: string;
}
