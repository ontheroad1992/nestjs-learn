import { HttpException, HttpStatus } from '@nestjs/common';

interface CustomizeError {
    code: number;
    error: string;
}

export class UserException extends HttpException {
    constructor(
        userError: CustomizeError = {
            code: 20000,
            error: '请求错误',
        },
        status: number = HttpStatus.BAD_REQUEST,
    ) {
        super(userError, status);
    }
}
