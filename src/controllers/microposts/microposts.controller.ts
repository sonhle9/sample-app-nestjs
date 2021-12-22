import { Controller, Post } from '@nestjs/common';
// import { Micropost } from 'src/models/micropost.entity';
// import { MicropostsService } from './microposts.service';

@Controller('microposts')
export class MicropostsController {
    constructor(){}

    @Post('')
    index(): Promise<{}> {
      const json = {"flash":["success","Micropost created!"]};
      return Promise.resolve(json);
    }
}
