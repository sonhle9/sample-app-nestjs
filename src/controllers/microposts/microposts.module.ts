import { Module } from '@nestjs/common';
import { MicropostsController } from './microposts.controller';
import { MicropostsService } from './microposts.service';

@Module({
  providers: [MicropostsService],
  controllers: [MicropostsController]
})
export class MicropostsModule {}
