import { Module } from "@nestjs/common";
import { RepositoryModule } from "src/common/base-repository/base.module";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
@Module({
    imports:[RepositoryModule],
    providers:[TaskService],
    controllers:[TaskController]
})
export class TaskModule{}