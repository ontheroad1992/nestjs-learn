import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Generated } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
    @Exclude()
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        comment: '用户uuid',
    })
    @Generated('uuid')
    uuid: string;

    @Column('varchar', {
        length: 40,
        unique: true,
        comment: '用户名',
    })
    username: string;

    @Column('varchar', {
        length: 40,
        nullable: true,
        comment: '用户昵称',
    })
    nickname?: string;

    @Column('simple-array', {
        comment: '用户角色',
    })
    roles?: string[];

    @Exclude()
    @Column('varchar', {
        comment: '用户密码',
    })
    password: string;

    @CreateDateColumn({ name: 'create_time' })
    createTime?: Date;

    @Exclude()
    @UpdateDateColumn({ name: 'update_time' })
    updateTime?: Date;

    constructor(partial?: Partial<User>) {
        Object.assign(this, partial);
    }
}
