import { Injectable } from '@nestjs/common';
import { RepositoryService } from 'src/common/base-repository/base.repository';
import { task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private taskRepo: RepositoryService<task>) {}
  async createTask(taskDetails) {
    const data = await this.taskRepo.create('task', taskDetails);
    return data;
  }
  async findTask() {
    const data = await this.taskRepo.findAll('task');
    return data;
  }
}
