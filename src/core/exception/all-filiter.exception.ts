import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch()
export class AllExceptionFiliter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        let status: number = HttpStatus.INTERNAL_SERVER_ERROR;
        let message: string = '服务器错误';
        let code: number = 10000;

        // 判断是不是由 HttpException 抛出的异常
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            message = exception.message.message;
            code = exception.message.code || code;
        }

        // 判断是不是由原生 Error 抛出的系统错误
        if (status === HttpStatus.INTERNAL_SERVER_ERROR && exception instanceof Error) {
            code = 999;
            // tslint:disable-next-line:no-console
            console.log(exception.stack);
        }

        response.status(status).json({
            error_code: code,
            msg: message,
            url: request.url,
        });
    }
}
