import { Test, TestingModule } from '@nestjs/testing';
import { CouponRuleController } from './coupon-rule.controller';

describe('CouponRule Controller', () => {
  let controller: CouponRuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouponRuleController],
    }).compile();

    controller = module.get<CouponRuleController>(CouponRuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
