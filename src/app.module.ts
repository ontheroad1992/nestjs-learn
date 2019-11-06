import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFiliter } from './exception/any-filiter';

@Module({
    imports: [UserModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionFiliter,
        },
    ],
})
export class AppModule {}
