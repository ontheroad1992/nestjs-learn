import { HttpException, HttpStatus } from '@nestjs/common';
import { SelfError } from '../core/exception/self-error.interface';

export class UserException extends HttpException {
    constructor(
        userError: SelfError = {
            code: 20000,
            error: '请求错误',
        },
        status: number = HttpStatus.BAD_REQUEST,
    ) {
        super(userError, status);
    }
}
