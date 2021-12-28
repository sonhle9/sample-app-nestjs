import { Controller, Delete, Param, Post } from '@nestjs/common';

@Controller('relationships')
export class RelationshipsController {
  @Post('')
  create(@Param('followed_id') followed_id): Promise<{}> {
    const json = { follow: true };
    return Promise.resolve(json);
  }

  @Delete(':id')
  async destroy(@Param('id') id): Promise<any> {
    const json = { unfollow: true };
    return Promise.resolve(json);
  }  
}
