import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return {"feed_items":[{"id":310,"user_name":"Example Userr","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"asdsa","timestamp":"about 5 hours"},{"id":309,"user_name":"Example Userr","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"dsadsa","timestamp":"10 days"},{"id":308,"user_name":"Example Userr","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"dsad","timestamp":"10 days"},{"id":307,"user_name":"Example Userr","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"sdsad","timestamp":"10 days"},{"id":306,"user_name":"Example Userr","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"asdasd","timestamp":"10 days"}],"total_count":260,"following":49,"followers":38,"micropost":60,"gravatar":"bebfcf57d6d8277d806a9ef3385c078d"};
    // return this.appService.feedItems();
  }

  @Post('/login')
  create() {
    return {"user":{"id":1,"name":"Example User","admin":true,"email":"example@railstutorial.org"},"jwt":"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.V0z1TcfuH6MgWtsXxcz0cejD1e6ES3lvfF6uqtU6CAg","token":"GfWUAie__aW_uSF4cWi6_Q"};
  }

  @Delete('/logout')
  destroy() {
    return {};
  }
}
