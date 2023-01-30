import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RepositoryService } from './base.repository';

@Module({
    imports:[],
  providers: [RepositoryService,PrismaService],
  exports:[RepositoryService]
})
export class RepositoryModule {}