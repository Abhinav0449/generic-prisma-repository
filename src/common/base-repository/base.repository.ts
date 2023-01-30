import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RepositoryService<T> {

  constructor(private prisma:PrismaService) {
    
  }

  async findAll(modelName: string): Promise<T[]> {
    return await this.prisma[modelName].findMany();
  }

  async findOne(modelName: string, id: number): Promise<T> {
    return await this.prisma[modelName].findOne({
      where: { id },
    });
  }

  async create(modelName: string, data: T): Promise<T> {
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
}
