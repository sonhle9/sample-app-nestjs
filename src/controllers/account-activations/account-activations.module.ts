import { Module } from '@nestjs/common';
import { AccountActivationsService } from './account-activations.service';
import { AccountActivationsController } from './account-activations.controller';

@Module({
  providers: [AccountActivationsService],
  controllers: [AccountActivationsController]
})
export class AccountActivationsModule {}
