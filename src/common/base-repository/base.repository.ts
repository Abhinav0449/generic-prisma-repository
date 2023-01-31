import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/bootstrap/cache/cache.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RepositoryService<T> {
  constructor(
    private prisma: PrismaService,
    private cacheService: CacheService,
  ) {}

  async findAll(modelName: string,condition?): Promise<T[]> {
    const cachedData = await this.cacheService.get(modelName);
    if (cachedData) {
      console.log('from cache----------->>', cachedData);
      return JSON.parse(cachedData);
    } else {
      console.log('not from cache');
      const doc = await this.prisma[modelName].findMany();
      await this.cacheService.set(modelName, JSON.stringify(doc));
      return doc;
    }
  }

  async findOne(modelName: string, id: number): Promise<T> {
    return await this.prisma[modelName].findOne({
      where: { id },
    });
  }

  async create(modelName: string, data: T): Promise<T> {
    await this.cacheService.del(modelName);
    return await this.prisma[modelName].create({
      data,
    });
  }

  async update(modelName: string, id: number, data: T): Promise<T> {
    return await this.prisma[modelName].update({
      where: { id },
      data,
    });
  }

  async delete(modelName: string, id: number): Promise<void> {
    await this.prisma[modelName].delete({
      where: { id },
    });
  }
  async updateMany(modelName: string, data: T[], condition?): Promise<void> {
    await this.cacheService.del(modelName);
    return await this.prisma[modelName].updateMany({ where: condition, data });
  }
}
