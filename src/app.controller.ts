import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return {"feed_items":[{"id":449,"user_name":"Example User","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"dsf","timestamp":"4 days"},{"id":448,"user_name":"Example User","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"sadsad","timestamp":"6 days"},{"id":447,"user_name":"Example User","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"hgfhgfhg","timestamp":"25 days"},{"id":446,"user_name":"Example User","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"tfdtg","timestamp":"25 days"},{"id":445,"user_name":"Example User","user_id":1,"gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":50,"content":"ddsad","timestamp":"25 days"}],"total_count":116,"following":46,"followers":36,"micropost":66,"gravatar":"bebfcf57d6d8277d806a9ef3385c078d"};
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
