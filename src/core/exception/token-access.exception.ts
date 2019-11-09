import { HttpException, HttpStatus } from '@nestjs/common';

export class TokenAccessException extends HttpException {
    constructor(message: string = '账户令牌已经过期', status: number = HttpStatus.BAD_REQUEST) {
        super({ code: 10010, message }, status);
    }
}
