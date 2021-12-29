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
        // if (e instanceof Prisma.PrismaClientKnownRequestError) {
        //   // The .code property can be accessed in a type-safe manner
        //   if (e.code === 'P2002') {
        //     console.log(
        //       'There is a unique constraint violation, a new user cannot be created with this email'
        //     )
        //   }
        // }
        // throw e
        return { flash: ["success", "Micropost created!"] };
      } 
    }

    // async create(createMicropostDto: CreateMicropostDto): Promise<any> {
      
    // }
}
