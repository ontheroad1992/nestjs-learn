import { Response, NextFunction, Request } from 'express';
import { jwtConstants } from 'src/auth/constants';
import { JwtService } from '@nestjs/jwt';
import { JwtRequest } from './interface/jwt-request.interface';
import { TokenException } from '../exception/token.exception';

const jwtService = new JwtService({
    secret: jwtConstants.secret,
});

export function jwtPassport(req: JwtRequest, res: Response, next: NextFunction) {
    const token = fromAuthHeaderAsBearerToken(req);
    if (token) {
        try {
            const decode = jwtService.verify(token);
            req.user = decode;
        } catch (error) {
            if (error.name === 'JsonWebTokenError') {
                throw new TokenException({
                    code: 10011,
                    message: '令牌错误',
                });
            }
            if (error.name === 'TokenExpiredError') {
                throw new TokenException({
                    code: 10010,
                    message: '账户令牌过期',
                });
            }
        }
    }
    next();
}

/** 获取 bearer_token */
function fromAuthHeaderAsBearerToken(request: Request) {
    return fromAuthHeaderWithScheme('bearer')(request);
}

/**
 * 根据前缀获取token信息
 * @param authScheme 前缀 bearer
 */
function fromAuthHeaderWithScheme(authScheme: string) {
    const authSchemeLower = authScheme.toLowerCase();
    return (request: Request) => {
        let token = null;
        if (request.headers.authorization) {
            const authHeader = request.headers.authorization;
            if (typeof authHeader !== 'string') {
                return null;
            }
            const matches = authHeader.match(/(\S+)\s+(\S+)/);
            const authParams = matches && { scheme: matches[1], value: matches[2] };
            if (authParams && authSchemeLower === authParams.scheme.toLowerCase()) {
                token = authParams.value;
            }
        }
        return token;
    };
}
