import { Module } from '@nestjs/common';
import { CouponRuleController } from './coupon-rule.controller';
import { CouponRuleService } from './coupon-rule.service';

@Module({
  controllers: [CouponRuleController],
  providers: [CouponRuleService]
})
export class CouponRuleModule {}
