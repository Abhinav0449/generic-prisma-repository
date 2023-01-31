import { Module } from '@nestjs/common';
import { CacheService } from 'src/bootstrap/cache/cache.service';
import { PrismaService } from 'src/prisma.service';
import { RepositoryService } from './base.repository';

@Module({
    imports:[],
  providers: [RepositoryService,PrismaService,CacheService],
  exports:[RepositoryService]
})
export class RepositoryModule {}