import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserParams } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Get()
    index(): Promise<{}> {
      const json = {"users":[{"id":266,"name":"SOMETHING","gravatar_id":"0ad32065eee793c3b63d26070ad1a2d8","size":50},{"id":268,"name":"Abc","gravatar_id":"59b3234941691668aa090dc648ff88ee","size":50},{"id":269,"name":"Abc","gravatar_id":"cdf12a8e871311acf6cebe13acb5948b","size":50},{"id":281,"name":"Lol","gravatar_id":"b7fda7bb2324aaa937bae57c02b7b7e6","size":50},{"id":6,"name":"Tinisha Dickinson PhD","gravatar_id":"3cd98f56e3a0822a762c9a4b85fd5685","size":50}],"total_count":276};
      return Promise.resolve(json);
    }

    @Get(':id')
    show(): Promise<{}> {
      const json = {"user":{"id":1,"name":"Example User","gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":80,"following":46,"followers":36,"current_user_following_user":Math.random() < 0.5},"id_relationships":1,"microposts":[{"id":449,"user_id":1,"content":"dsf","timestamp":"4 days"},{"id":448,"user_id":1,"content":"sadsad","timestamp":"6 days"},{"id":447,"user_id":1,"content":"hgfhgfhg","timestamp":"25 days"},{"id":446,"user_id":1,"content":"tfdtg","timestamp":"25 days"},{"id":445,"user_id":1,"content":"ddsad","timestamp":"25 days"}],"total_count":66};
      return Promise.resolve(json);
    }

    @Post('')
    create(@Body() userParams: UserParams): Promise<{}> {
      console.log(userParams);
      // const json = {"flash":["info","Please check your email to activate your account."],"user":{}};
      // return Promise.resolve({});
      return this.usersService.create(userParams);
    }

    @Get(':id/edit')
    edit(): Promise<{}> {
      const json = {"user":{"id":1,"name":"Example User","email":"example@railstutorial.org","created_at":"2020-05-04T19:40:09.222Z","updated_at":"2021-12-21T06:43:59.618Z","password_digest":"$2a$12$W4sGhZZGE5eSYT50iee9GuQiZ7fsqCT7tjxgXDgF7QUJy4pN12Bx6","remember_digest":"$2a$12$BjKm7OKarnAUAWUDsCN9H.4WvfPEbNaUBaJQt0MBS4hsMcD3Q0kte","admin":true,"activation_digest":"$2a$12$44OKu4ShrVk5xsi3hNw3v.wrdQVupmQ33CF8q5qymzzXSL4jaiE6K","activated":true,"activated_at":"2020-05-04T19:40:08.751Z","reset_digest":null,"reset_sent_at":null},"gravatar":"bebfcf57d6d8277d806a9ef3385c078d"};
      return Promise.resolve(json);
    }

    @Get(':id/following')
    following(@Query('page') page: string): Promise<{}> {
      console.log(page);
      const json = {"users":[{"id":6,"name":"Tinisha Dickinson PhD","gravatar_id":"3cd98f56e3a0822a762c9a4b85fd5685","size":50},{"id":8,"name":"Miss Kenton Hauck","gravatar_id":"6b86329f0eabfdc26948d0c4ab7a5e36","size":50},{"id":9,"name":"Teodoro Balistreri","gravatar_id":"fb766491c658ffaf308836aab77a874f","size":50},{"id":10,"name":"Clark Hilll","gravatar_id":"e7bd8c88299e730792bda440e23722a9","size":50},{"id":11,"name":"Crystle Beahan","gravatar_id":"8ddeccab0489f1746d43dc0e6ed659d4","size":50}],"total_count":46,"xusers":[{"id":6,"name":"Tinisha Dickinson PhD","gravatar_id":"3cd98f56e3a0822a762c9a4b85fd5685","size":50},{"id":8,"name":"Miss Kenton Hauck","gravatar_id":"6b86329f0eabfdc26948d0c4ab7a5e36","size":50},{"id":9,"name":"Teodoro Balistreri","gravatar_id":"fb766491c658ffaf308836aab77a874f","size":50},{"id":10,"name":"Clark Hilll","gravatar_id":"e7bd8c88299e730792bda440e23722a9","size":50},{"id":11,"name":"Crystle Beahan","gravatar_id":"8ddeccab0489f1746d43dc0e6ed659d4","size":50},{"id":12,"name":"Juan Farrell","gravatar_id":"29e5c6c90a5a775f04457add23bbdc40","size":50},{"id":13,"name":"Brande Wolff","gravatar_id":"f92b4b5fe1f2713c9b23e2081a21280c","size":50},{"id":14,"name":"Tonia Mitchell","gravatar_id":"ec6557a80b1ca1a3fd33156e9752ba46","size":50},{"id":15,"name":"Claudine Langworth","gravatar_id":"4e40b83c7326e6fc20f89d2a58d0b007","size":50},{"id":16,"name":"Carson Nikolaus","gravatar_id":"e8a59e5980a0337ec66beac5355d26f5","size":50},{"id":17,"name":"Raymonde Schinner","gravatar_id":"ef9489921fbb08e5610a5bdb3c666631","size":50},{"id":18,"name":"Elfriede Leuschke","gravatar_id":"92586baed72871b8a0d19d3496e06ffa","size":50},{"id":19,"name":"Shila Howell","gravatar_id":"5eff015710bebce6f4c7a4e0d90d561d","size":50},{"id":20,"name":"Melvin Emard","gravatar_id":"2685984ae14ace13e01510d4d4102ae4","size":50},{"id":21,"name":"Aubrey Toy IV","gravatar_id":"5a161f18813f2a355916d23fa1a53092","size":50},{"id":22,"name":"Ms. Hue Torphy","gravatar_id":"78484d59f184c6690af3db3f15c0ce7b","size":50},{"id":23,"name":"Ira Prohaska","gravatar_id":"b3b47dfad3d5e1bec99ba22d49f3e4ad","size":50},{"id":24,"name":"Robt Heaney IV","gravatar_id":"e48fecda4dc718ca41453f4cfc31e0be","size":50},{"id":25,"name":"Mr. Bronwyn Lind","gravatar_id":"949272e115f08275bdaab4e619b918fc","size":50},{"id":26,"name":"Kacey Ebert V","gravatar_id":"0a6585a7611a066b5b0f3242b81a7c4b","size":50},{"id":27,"name":"Rigoberto Boyle Sr.","gravatar_id":"8bea7a84fe792a6706a418c6439a7533","size":50},{"id":28,"name":"Edward O'Reilly","gravatar_id":"747cc835a8465b8b1ac3c87929137dc4","size":50},{"id":29,"name":"Magnolia Kuhic","gravatar_id":"fc2ef4368624bd6c04b9067d57653b48","size":50},{"id":30,"name":"Laverne Jakubowski","gravatar_id":"ec2aff8d19609336fb8c8f718a12ec51","size":50},{"id":31,"name":"Roscoe Satterfield","gravatar_id":"13ec923a3f66d8ea5c597911f775671d","size":50},{"id":32,"name":"Mathew Brekke","gravatar_id":"60c4b6fba5c1ad51485826f6b204f9b9","size":50},{"id":33,"name":"Kurtis Hilpert PhD","gravatar_id":"761e4cfca1965696420d7e8e1f96e113","size":50},{"id":34,"name":"Stuart Gislason","gravatar_id":"a27ad24e910039670b25150981ca3443","size":50},{"id":35,"name":"Tim O'Hara DVM","gravatar_id":"6c2e4805657e6fb18fcc8e740b6d77d2","size":50},{"id":36,"name":"Jeffrey Shanahan","gravatar_id":"639956a389bc2e9ca6d639b293622ec4","size":50},{"id":37,"name":"Marchelle Weissnat","gravatar_id":"40ccf5063d678258b33afb3e55ad9dcc","size":50},{"id":38,"name":"Julian Quitzon","gravatar_id":"424d3bd70a1cbaa00bfeabd9fbaa62b0","size":50},{"id":39,"name":"Ms. Theodore Beer","gravatar_id":"64b201a182ce3d9df0f8283d3b7789b5","size":50},{"id":40,"name":"Vada Osinski","gravatar_id":"5e2664620982de6ba9f6d53028300030","size":50},{"id":41,"name":"Valorie Trantow","gravatar_id":"99ec87324ed0098495c8508ece7904cc","size":50},{"id":42,"name":"Loan Mann","gravatar_id":"4e9134bdd6bb8a4df9ebc0a654076227","size":50},{"id":43,"name":"Kazuko Schmitt","gravatar_id":"6c3af0bcdfc5a103595b0570f9c6d0f6","size":50},{"id":44,"name":"Tommie Mueller","gravatar_id":"85d633b4798b9fca8043ea3c7da40564","size":50},{"id":45,"name":"Chance Windler Jr.","gravatar_id":"25ae749bd75d268fb2844405bd403e3d","size":50},{"id":46,"name":"Paul Littel","gravatar_id":"c64ba11cb3b628d8ca01a03f72893938","size":50},{"id":47,"name":"Hans Hettinger","gravatar_id":"7fe147a8e2d137d0ce8d4491ae5505f9","size":50},{"id":48,"name":"Mrs. Leslie Beier","gravatar_id":"aa57faa7ca13e7e4d9aa71481c6052f4","size":50},{"id":49,"name":"Ms. Billie Gaylord","gravatar_id":"24693e9659d132e1afc2920d582d34b3","size":50},{"id":50,"name":"Magan Maggio","gravatar_id":"e55b8632751b1f2a08f437e1da7f3d7b","size":50},{"id":268,"name":"Abc","gravatar_id":"59b3234941691668aa090dc648ff88ee","size":50},{"id":281,"name":"Lol","gravatar_id":"b7fda7bb2324aaa937bae57c02b7b7e6","size":50}],"user":{"id":1,"name":"Example User","following":46,"followers":36,"micropost":69,"gravatar":"bebfcf57d6d8277d806a9ef3385c078d"}};
      return Promise.resolve(json);
    }

    @Get(':id/followers')
    followers(@Query('page') page: string): Promise<{}> {
      console.log(page);
      const json = {"users":[{"id":6,"name":"Tinisha Dickinson PhD","gravatar_id":"3cd98f56e3a0822a762c9a4b85fd5685","size":50},{"id":7,"name":"Wilhemina Schneider","gravatar_id":"4556918922ee2836241af45928ab0618","size":50},{"id":8,"name":"Miss Kenton Hauck","gravatar_id":"6b86329f0eabfdc26948d0c4ab7a5e36","size":50},{"id":9,"name":"Teodoro Balistreri","gravatar_id":"fb766491c658ffaf308836aab77a874f","size":50},{"id":10,"name":"Clark Hilll","gravatar_id":"e7bd8c88299e730792bda440e23722a9","size":50}],"total_count":36,"xusers":[{"id":6,"name":"Tinisha Dickinson PhD","gravatar_id":"3cd98f56e3a0822a762c9a4b85fd5685","size":50},{"id":7,"name":"Wilhemina Schneider","gravatar_id":"4556918922ee2836241af45928ab0618","size":50},{"id":8,"name":"Miss Kenton Hauck","gravatar_id":"6b86329f0eabfdc26948d0c4ab7a5e36","size":50},{"id":9,"name":"Teodoro Balistreri","gravatar_id":"fb766491c658ffaf308836aab77a874f","size":50},{"id":10,"name":"Clark Hilll","gravatar_id":"e7bd8c88299e730792bda440e23722a9","size":50},{"id":11,"name":"Crystle Beahan","gravatar_id":"8ddeccab0489f1746d43dc0e6ed659d4","size":50},{"id":12,"name":"Juan Farrell","gravatar_id":"29e5c6c90a5a775f04457add23bbdc40","size":50},{"id":13,"name":"Brande Wolff","gravatar_id":"f92b4b5fe1f2713c9b23e2081a21280c","size":50},{"id":14,"name":"Tonia Mitchell","gravatar_id":"ec6557a80b1ca1a3fd33156e9752ba46","size":50},{"id":15,"name":"Claudine Langworth","gravatar_id":"4e40b83c7326e6fc20f89d2a58d0b007","size":50},{"id":16,"name":"Carson Nikolaus","gravatar_id":"e8a59e5980a0337ec66beac5355d26f5","size":50},{"id":17,"name":"Raymonde Schinner","gravatar_id":"ef9489921fbb08e5610a5bdb3c666631","size":50},{"id":18,"name":"Elfriede Leuschke","gravatar_id":"92586baed72871b8a0d19d3496e06ffa","size":50},{"id":19,"name":"Shila Howell","gravatar_id":"5eff015710bebce6f4c7a4e0d90d561d","size":50},{"id":20,"name":"Melvin Emard","gravatar_id":"2685984ae14ace13e01510d4d4102ae4","size":50},{"id":21,"name":"Aubrey Toy IV","gravatar_id":"5a161f18813f2a355916d23fa1a53092","size":50},{"id":22,"name":"Ms. Hue Torphy","gravatar_id":"78484d59f184c6690af3db3f15c0ce7b","size":50},{"id":23,"name":"Ira Prohaska","gravatar_id":"b3b47dfad3d5e1bec99ba22d49f3e4ad","size":50},{"id":24,"name":"Robt Heaney IV","gravatar_id":"e48fecda4dc718ca41453f4cfc31e0be","size":50},{"id":25,"name":"Mr. Bronwyn Lind","gravatar_id":"949272e115f08275bdaab4e619b918fc","size":50},{"id":26,"name":"Kacey Ebert V","gravatar_id":"0a6585a7611a066b5b0f3242b81a7c4b","size":50},{"id":27,"name":"Rigoberto Boyle Sr.","gravatar_id":"8bea7a84fe792a6706a418c6439a7533","size":50},{"id":28,"name":"Edward O'Reilly","gravatar_id":"747cc835a8465b8b1ac3c87929137dc4","size":50},{"id":29,"name":"Magnolia Kuhic","gravatar_id":"fc2ef4368624bd6c04b9067d57653b48","size":50},{"id":30,"name":"Laverne Jakubowski","gravatar_id":"ec2aff8d19609336fb8c8f718a12ec51","size":50},{"id":31,"name":"Roscoe Satterfield","gravatar_id":"13ec923a3f66d8ea5c597911f775671d","size":50},{"id":32,"name":"Mathew Brekke","gravatar_id":"60c4b6fba5c1ad51485826f6b204f9b9","size":50},{"id":33,"name":"Kurtis Hilpert PhD","gravatar_id":"761e4cfca1965696420d7e8e1f96e113","size":50},{"id":34,"name":"Stuart Gislason","gravatar_id":"a27ad24e910039670b25150981ca3443","size":50},{"id":35,"name":"Tim O'Hara DVM","gravatar_id":"6c2e4805657e6fb18fcc8e740b6d77d2","size":50},{"id":36,"name":"Jeffrey Shanahan","gravatar_id":"639956a389bc2e9ca6d639b293622ec4","size":50},{"id":37,"name":"Marchelle Weissnat","gravatar_id":"40ccf5063d678258b33afb3e55ad9dcc","size":50},{"id":38,"name":"Julian Quitzon","gravatar_id":"424d3bd70a1cbaa00bfeabd9fbaa62b0","size":50},{"id":39,"name":"Ms. Theodore Beer","gravatar_id":"64b201a182ce3d9df0f8283d3b7789b5","size":50},{"id":40,"name":"Vada Osinski","gravatar_id":"5e2664620982de6ba9f6d53028300030","size":50},{"id":41,"name":"Valorie Trantow","gravatar_id":"99ec87324ed0098495c8508ece7904cc","size":50}],"user":{"id":1,"name":"Example User","following":46,"followers":36,"micropost":69,"gravatar":"bebfcf57d6d8277d806a9ef3385c078d"}};
      return Promise.resolve(json);
    }

    @Patch(':id')
    async update(): Promise<{}> {
      const json = {"flash_success":["success","Profile updated"]};
      return Promise.resolve(json);
    }

    @Delete(':id')
    async destroy(): Promise<{}> {
      const json = {"flash":["success","User deleted"]};
      return Promise.resolve(json);
    }  
}
