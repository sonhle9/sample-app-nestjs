import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordResetsModule } from './password-resets/password-resets.module';
import { MicropostsModule } from './microposts/microposts.module';
import { AccountActivationsModule } from './account-activations/account-activations.module';
import { RelationshipsModule } from './relationships/relationships.module';
import { SessionsModule } from './sessions/sessions.module';
import { UsersModule } from './users/users.module';
import { RelationshipsService } from './relationships/relationships.service';
import { SessionsService } from './sessions/sessions.service';
import { MicropostsService } from './microposts/microposts.service';
import { AccountActivationsService } from './account-activations/account-activations.service';
import { PasswordResetsService } from './password-resets/password-resets.service';
import { UsersService } from './users/users.service';
import { AccountActivationsController } from './account-activations/account-activations.controller';
import { UsersController } from './users/users.controller';
import { MicropostsController } from './microposts/microposts.controller';
import { RelationshipsController } from './relationships/relationships.controller';
import { SessionsController } from './sessions/sessions.controller';
import { PasswordResetsController } from './password-resets/password-resets.controller';
import { BooksModule } from './books/books.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MicropostsModule, AccountActivationsModule, PasswordResetsModule, RelationshipsModule, SessionsModule, UsersModule, BooksModule, AuthModule],
  controllers: [AppController, MicropostsController, AccountActivationsController, PasswordResetsController, RelationshipsController, SessionsController, UsersController],
  providers: [PrismaService, AppService, MicropostsService, AccountActivationsService, PasswordResetsService, RelationshipsService, SessionsService, UsersService],
})
export class AppModule {}
