import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MicropostParams } from './dto/create-micropost.dto';

@Injectable()
export class MicropostsService {
    constructor(private prisma: PrismaService) {}

    async create(micropostParams: MicropostParams): Promise<any> {
      try {
        await this.prisma.micropost.create(
        {
          data: {
            content: micropostParams.micropost.content,
            user_id: 1,
          },
        });
        return { flash: ["success", "Micropost created!"] };
      } catch (e) {
        return { flash: ["success", "Micropost created!"], errors: e };
      } 
    }
}
