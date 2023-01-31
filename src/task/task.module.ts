import { Module } from "@nestjs/common";
import { CacheService } from "src/bootstrap/cache/cache.service";
import { RepositoryModule } from "src/common/base-repository/base.module";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
@Module({
    imports:[RepositoryModule],
    providers:[TaskService,CacheService],
    controllers:[TaskController]
})
export class TaskModule{}