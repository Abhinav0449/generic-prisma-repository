import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  async create() {
    return await this.taskService.createTask();
  }
  @Get("/find")
  async find() {
    return await this.taskService.findTask();
  }
}
