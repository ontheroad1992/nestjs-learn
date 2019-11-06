import { Request, Response, NextFunction } from 'express';

/** 请求日志中间件 */
export function logger(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    res.once('finish', () => {
        const end = Date.now();
        // tslint:disable-next-line:no-console
        console.log(
            `date:[${new Date().toLocaleDateString()}] ip:[${req.ip}] method:[${req.method}] ms:[${end - start}] url:[${req.protocol}://${
                req.headers.host
            }${req.originalUrl}]`,
        );
    });
    return next();
}
