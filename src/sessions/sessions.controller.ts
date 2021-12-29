import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
    // constructor(private sessionsService: SessionsService){}

    @Get()
    index(): Promise<{}> {
      const json = {"user":{"id":1,"name":"Example Userr","admin":true,"email":"example@railstutorial.org"}}
      return Promise.resolve(json);
    }
    
    // @Post('create')
    // async create(@Body() contactData: Contact): Promise<any> {
    //   return this.sessionsService.create(contactData);
    // } 
    
    // @Patch(':id/update')
    // async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
    //     contactData.id = Number(id);
    //     console.log('Update #' + contactData.id)
    //     return this.sessionsService.update(contactData);
    // }  

    // @Delete(':id/delete')
    // async delete(@Param('id') id): Promise<any> {
    //   return this.sessionsService.delete(id);
    // }  
}
