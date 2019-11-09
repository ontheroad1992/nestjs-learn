import { HttpException, HttpStatus } from '@nestjs/common';

export class TokenRefreshException extends HttpException {
   constructor(message: string = '刷新令牌已经过期', status: number = HttpStatus.BAD_REQUEST) {
        super({ code: 10012, message }, status);
    }
}
