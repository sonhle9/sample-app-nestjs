import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  feedItems() {
    return this.prisma.micropost.findMany()
  }

  getHello(): string {
    return 'Hello World!';
  }
}
