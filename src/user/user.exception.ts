import { HttpException, HttpStatus } from '@nestjs/common';
import { SelfError } from '../core/exception/self-error.interface';

export class UserException extends HttpException {
    constructor(
        { code = 20000, message = '用户模块错误' }: SelfError = {},
        status: number = HttpStatus.BAD_REQUEST,
    ) {
        super({ code, message }, status);
    }
}
