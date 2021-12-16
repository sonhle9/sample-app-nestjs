// import { Body, Controller, Delete, Get, Param, Patch, Post, Headers, HttpException, HttpStatus } from '@nestjs/common';
// import { ArticlesService } from './static_pages.service';
// import { CreateArticleDto, UpdateArticleDto } from './dto/article.dto';
// import { Article } from './interfaces/article.interface';
// import { JWT_HEADER_PARAM, NOT_ALLOWED_USER_MESSAGE, userCanDoAction } from '../../helpers/utils';
import { Controller, Get, Render } from '@nestjs/common';
import { StaticPagesService } from './static_pages.service';

@Controller('controller/static_pages')
export class StaticPagesController {

  constructor(private readonly articlesService: StaticPagesService) {}

  // @Post()
  // async create(@Body() createArticleDto: CreateArticleDto) {
  //   await this.articlesService.create(createArticleDto);
  // }

  // @Get()
  // async findAll(): Promise<Article[]> {
  //   return this.articlesService.findAll();
  // }

  @Get()
  @Render('home')
  root() {
    return { title: 'Home Page' };
  }

  // @Patch('/:id')
  // async update(@Body() updateArticleDto: UpdateArticleDto,
  //              @Param('id') id,
  //              @Headers(JWT_HEADER_PARAM) token) {
  //   const article = await this.articlesService.getArticle(id);
  //   if(userCanDoAction(token, article.author)){
  //     return await this.articlesService.update(updateArticleDto, id);
  //   }
  //   throw new HttpException(NOT_ALLOWED_USER_MESSAGE, HttpStatus.FORBIDDEN);
  // }

  // @Delete('/:id')
  // async delete(@Param('id') id) {
  //   await this.articlesService.delete(id);
  // }

}
