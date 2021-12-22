import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

export interface UserUpdateField {
  name: string
  email: string
  password: string
  password_confirmation: string
}

@Controller('users')
export class UsersController {
    @Get()
    index(): Promise<{}> {
      const json = {"users":[{"id":266,"name":"SOMETHING","gravatar_id":"0ad32065eee793c3b63d26070ad1a2d8","size":50},{"id":268,"name":"Abc","gravatar_id":"59b3234941691668aa090dc648ff88ee","size":50},{"id":269,"name":"Abc","gravatar_id":"cdf12a8e871311acf6cebe13acb5948b","size":50},{"id":281,"name":"Lol","gravatar_id":"b7fda7bb2324aaa937bae57c02b7b7e6","size":50},{"id":6,"name":"Tinisha Dickinson PhD","gravatar_id":"3cd98f56e3a0822a762c9a4b85fd5685","size":50}],"total_count":276};
      return Promise.resolve(json);
    }

    @Get(':id')
    show(): Promise<{}> {
      const json = {"user":{"id":1,"name":"Example User","gravatar_id":"bebfcf57d6d8277d806a9ef3385c078d","size":80,"following":46,"followers":36,"current_user_following_user":false},"id_relationships":null,"microposts":[{"id":449,"user_id":1,"content":"dsf","timestamp":"4 days"},{"id":448,"user_id":1,"content":"sadsad","timestamp":"6 days"},{"id":447,"user_id":1,"content":"hgfhgfhg","timestamp":"25 days"},{"id":446,"user_id":1,"content":"tfdtg","timestamp":"25 days"},{"id":445,"user_id":1,"content":"ddsad","timestamp":"25 days"}],"total_count":66};
      return Promise.resolve(json);
    }

    @Get(':id/edit')
    edit(): Promise<{}> {
      const json = {"user":{"id":1,"name":"Example User","email":"example@railstutorial.org","created_at":"2020-05-04T19:40:09.222Z","updated_at":"2021-12-21T06:43:59.618Z","password_digest":"$2a$12$W4sGhZZGE5eSYT50iee9GuQiZ7fsqCT7tjxgXDgF7QUJy4pN12Bx6","remember_digest":"$2a$12$BjKm7OKarnAUAWUDsCN9H.4WvfPEbNaUBaJQt0MBS4hsMcD3Q0kte","admin":true,"activation_digest":"$2a$12$44OKu4ShrVk5xsi3hNw3v.wrdQVupmQ33CF8q5qymzzXSL4jaiE6K","activated":true,"activated_at":"2020-05-04T19:40:08.751Z","reset_digest":null,"reset_sent_at":null},"gravatar":"bebfcf57d6d8277d806a9ef3385c078d"};
      return Promise.resolve(json);
    }

    @Patch(':id')
    async update(@Param('id') id, @Body() contactData: UserUpdateField): Promise<any> {
        // contactData.id = Number(id);
        // console.log('Update #' + contactData.id)
        // return this.contactsService.update(contactData);
      const json = {"flash_success":["success","Profile updated"]};
      // const json = {"error":["Password confirmation doesn't match Password"]};
      return Promise.resolve(json);
    }  
}
