import { Body, Controller, Param, Patch } from '@nestjs/common';

@Controller('account_activations')
export class AccountActivationsController {
  @Patch(':id')
  async edit(@Param('id') id: string, @Body() email: String): Promise<{}> {
    const json = email !== "" ? 
    {"user":{"id":1,"name":"Example User","admin":true,"email":"example@railstutorial.org"},"jwt":"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.V0z1TcfuH6MgWtsXxcz0cejD1e6ES3lvfF6uqtU6CAg","token":"GfWUAie__aW_uSF4cWi6_Q","flash":["success","Account activated!"]} : 
    {"flash":["success","Invalid activation link"]};
    return Promise.resolve(json);
  }  
}
