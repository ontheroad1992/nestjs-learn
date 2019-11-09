import { HttpException, HttpStatus } from '@nestjs/common';
import { SelfError } from './self-error.interface';

export class TokenException extends HttpException {
    constructor(
        userError: SelfError = {
            code: 10010,
            message: '用户令牌异常',
        },
        status: number = HttpStatus.UNAUTHORIZED,
    ) {
        super(userError, status);
    }
}
