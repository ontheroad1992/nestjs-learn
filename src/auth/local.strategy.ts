import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';

export class Localstrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authServer: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authServer.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
