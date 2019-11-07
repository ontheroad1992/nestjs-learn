import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { Localstrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
    controllers: [AuthController],
    imports: [UserModule, PassportModule],
    providers: [AuthService, Localstrategy],
})
export class AuthModule {}
