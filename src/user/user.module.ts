import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/common/base-repository/base.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [RepositoryModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
