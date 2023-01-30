import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly taskService: UserService) {}
  @Post('')
  async create(@Body() userDetails) {
    return await this.taskService.createUser(userDetails);
  }
  @Get('')
  async find() {
    return await this.taskService.findUser();
  }
}
