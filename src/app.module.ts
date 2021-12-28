import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicropostsService } from './controllers/microposts/microposts.service';
import { MicropostsModule } from './controllers/microposts/microposts.module';
import { AccountActivationsService } from './controllers/account-activations/account-activations.service';
import { AccountActivationsController } from './controllers/account-activations/account-activations.controller';
import { AccountActivationsModule } from './controllers/account-activations/account-activations.module';
import { PasswordResetsService } from './controllers/password-resets/password-resets.service';
import { RelationshipsModule } from './controllers/relationships/relationships.module';
import { SessionsModule } from './controllers/sessions/sessions.module';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './controllers/users/users.service';
import { UsersModule } from './controllers/users/users.module';

@Module({
  imports: [MicropostsModule, AccountActivationsModule, RelationshipsModule, SessionsModule, UsersModule],
  controllers: [AppController, AccountActivationsController, UsersController],
  providers: [AppService, MicropostsService, AccountActivationsService, PasswordResetsService, UsersService],
})
export class AppModule {}
