import { Module } from '@nestjs/common';
import { StaticPagesController } from './static_pages.controller';
import { StaticPagesService } from './static_pages.service';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forFeature([{ name: 'Article', schema: ArticlesSchema }])],
  controllers: [StaticPagesController],
  providers: [StaticPagesService],
})
export class StaticPagesModule {

}
