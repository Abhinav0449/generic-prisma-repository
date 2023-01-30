import { Injectable } from '@nestjs/common';
import { RepositoryService } from 'src/common/base-repository/base.repository';
import { user } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private userRepo: RepositoryService<user>) {}
  async createUser(userDetails) {
    const data = await this.userRepo.create('user', userDetails);
    return data;
  }
  async findUser() {
    const data = await this.userRepo.findAll('user');
    return data;
  }
}
