import { Controller, Delete, Param, Post } from '@nestjs/common';
// import { Micropost } from 'src/models/micropost.entity';
// import { MicropostsService } from './microposts.service';

@Controller('microposts')
export class MicropostsController {
    constructor(){}

    @Post('')
    create(): Promise<{}> {
      const json = {"flash":["success","Micropost created!"]};
      return Promise.resolve(json);
    }

    @Delete(':id')
    async destroy(@Param('id') id): Promise<any> {
      const json = {"flash":["success","Micropost deleted"]};
      return Promise.resolve(json);
    }  
}
