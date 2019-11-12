import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('varchar', { length: 40 })
    username: string;

    @Column('varchar')
    password: string;
}
