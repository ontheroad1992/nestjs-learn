import { HttpException, HttpStatus } from '@nestjs/common';

export class ParameterException extends HttpException {
    constructor(message: string = '参数校验错误', status: number = HttpStatus.BAD_REQUEST) {
        super({ code: 10030, message }, status);
    }
}
