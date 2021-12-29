import { Body, Controller, Delete, Logger, Param, Post, Req } from '@nestjs/common';
import { CreateMicropostDto, MicropostParams } from './dto/create-micropost.dto';
import { MicropostsService } from './microposts.service';

@Controller('microposts')
export class MicropostsController {
    constructor(private readonly micropostsService: MicropostsService) {}
    private readonly logger = new Logger(MicropostsController.name);

    @Post('')
    create(@Body() micropostParams: MicropostParams, @Req() req) {
      // const json = {"flash":["success","Micropost created!"]};
      // return Promise.resolve(json);
      // this.logger.log(req.toString());
      console.log(req);
      return this.micropostsService.create(micropostParams);
    }

    @Delete(':id')
    async destroy(@Param('id') id): Promise<any> {
      const json = {"flash":["success","Micropost deleted"]};
      return Promise.resolve(json);
    }  
}
