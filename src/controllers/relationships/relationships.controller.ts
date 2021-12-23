import { Controller, Delete, Param, Post } from '@nestjs/common';
// import { RelationshipsService } from './relationships.service';

@Controller('relationships')
export class RelationshipsController {
  // constructor(private readonly relationshipsService: RelationshipsService) {}

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
