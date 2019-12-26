import { Test, TestingModule } from '@nestjs/testing';
import { CouponRuleService } from './coupon-rule.service';

describe('CouponRuleService', () => {
  let service: CouponRuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouponRuleService],
    }).compile();

    service = module.get<CouponRuleService>(CouponRuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
