import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';

@Module({
    imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, PhotoModule],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
