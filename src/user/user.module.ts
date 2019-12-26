import { Module, Global } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Global()
@Module({
    controllers: [UserController],
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService, TypeOrmModule],
})
export class UserModule {}
