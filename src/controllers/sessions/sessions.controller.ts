import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
// import { User } from 'src/models/user.entity';
import { Contact } from '../contacts/contact.entity';
import { SessionsService } from './sessions.service';

// export interface User {
//   readonly id: number
//   name: string
//   admin: boolean
//   email: string
// }

@Controller('sessions')
export class SessionsController {
    constructor(private sessionsService: SessionsService){}

    @Get()
    index(): Promise<{}> {
      const json = {"user":{"id":1,"name":"Example User","admin":true,"email":"example@railstutorial.org"}};
      return Promise.resolve(json);
    }
    
    @Post('create')
    async create(@Body() contactData: Contact): Promise<any> {
      return this.sessionsService.create(contactData);
    } 
    
    @Patch(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.sessionsService.update(contactData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.sessionsService.delete(id);
    }  
}
