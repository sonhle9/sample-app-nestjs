import { Controller, Delete, Param, Post } from '@nestjs/common';

@Controller('microposts')
export class MicropostsController {
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
