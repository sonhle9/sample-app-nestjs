import { Injectable } from '@nestjs/common';
import { Micropost, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMicropostDto, MicropostParams } from './dto/create-micropost.dto';

@Injectable()
export class MicropostsService {
    constructor(private prisma: PrismaService) {}

    async create(micropostParams: MicropostParams): Promise<any> {
      try {
        await this.prisma.micropost.create({data: micropostParams.micropost});
        return { flash: ["success", "Micropost created!"] };
      } catch (e) {
        return { flash: ["success", "Micropost created!"], errors: e };
      } 
    }
}
