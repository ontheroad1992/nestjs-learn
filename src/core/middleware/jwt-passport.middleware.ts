import { Request, Response, NextFunction } from 'express';
import { jwtConstants } from 'src/auth/constants';

interface SelfRequest extends Request {
    user: {
        roles: string[];
    };
}

export function jwtPassport(req: SelfRequest, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    req.user = {
        roles: ['user'],
    };
    next();
}
