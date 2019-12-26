import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Connection } from 'typeorm';
import { CouponController } from './coupon/coupon.controller';
import { CouponModule } from './coupon/coupon.module';
import { CouponRuleModule } from './coupon-rule/coupon-rule.module';

@Module({
    imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, CouponModule, CouponRuleModule],
    controllers: [CouponController],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
