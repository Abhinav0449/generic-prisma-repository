import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post('')
  async create(@Body() taskDetails) {
    return await this.taskService.createTask(taskDetails);
  }
  @Get('')
  async find() {
    return await this.taskService.findTask();
  }
}
