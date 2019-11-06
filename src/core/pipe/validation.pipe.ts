import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { validate, ValidatorOptions } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ParameterException } from '../exception/parameter.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    /**
     * 基于 class-validator 的参数校验拦截
     * @param options class-validator 的配置参数
     */
    constructor(public options?: ValidatorOptions) {}

    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToClass(metatype, value);
        const errors = await validate(object, this.options);
        if (errors.length > 0) {
            // 获取第一条错误消息
            throw new ParameterException(Object.values(errors[0].constraints)[0]);
        }
        return value;
    }

    private toValidate(metatype: any): boolean {
        const types: any[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
