import { Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';
import { Exclude } from 'class-transformer';
import { CouponType } from './interfaces/coupon-type.interfaces';

@Entity()
export class Coupon {
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        comment: '优惠卷码',
    })
    @Generated('uuid')
    code: string;

    @Column('enum', {
        enum: CouponType,
        nullable: true,
        comment: '优惠卷类型：full=满减；deduction=抵扣；discount=折扣；',
    })
    type: CouponType;
}
