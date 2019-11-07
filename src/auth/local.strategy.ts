import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class Localstrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authServer: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const object: LoginAuthDto = { username, password }
        const user = await this.authServer.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
