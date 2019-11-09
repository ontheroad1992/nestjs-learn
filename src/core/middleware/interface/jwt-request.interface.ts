import { Request } from 'express';

export interface JwtRequest extends Request {
    user: {
        roles: string[];
        userId: number;
        username: string;
    };
}
