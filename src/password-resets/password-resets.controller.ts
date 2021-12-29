import { Body, Controller, Patch, Post } from '@nestjs/common';
import { PasswordResetParams } from './dto/create-password-reset.dto';
import { PasswordResetsService } from './password-resets.service';

@Controller('password_resets')
export class PasswordResetsController {
  // constructor(private readonly passwordResetsService: PasswordResetsService) {}

  @Post('')
  async create(@Body() passwordResetParams: PasswordResetParams): Promise<{}> {
    const json = passwordResetParams.password_reset.email !== "" ? 
    {"flash":["info","Email sent with password reset instructions"]} : 
    {"flash":["danger","Email address not found"]};
    return Promise.resolve(json);
  }

  @Patch(':id')
  async update(@Body('user') userParams: any): Promise<{}> {
    const json = userParams.password === "" || userParams.password_confirmation === "" ? 
    {"error":["Password confirmation doesn't match Password","Password is too short (minimum is 6 characters)"]} : 
    {"flash":["success","Password has been reset."]};
    // const json = { unfollow: true };
    return Promise.resolve(json);
  }  
}
