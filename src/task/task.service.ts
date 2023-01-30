import { Injectable } from '@nestjs/common';
import { RepositoryService } from 'src/common/base-repository/base.repository';
import { task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor( private taskRepo: RepositoryService<task>) {}
  async createTask() {
    const data: any = {
      title: 'prisma check',
      status: 'pending',
    };
    const da=await this.taskRepo.create('task', data);
    return da
  }
  async findTask(){
      const data=await this.taskRepo.findAll('task');
      return data
  }
}
