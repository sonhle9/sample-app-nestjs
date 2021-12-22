import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './controllers/contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionsModule } from './controllers/sessions/sessions.module';
import { UsersModule } from './controllers/users/users.module';
import { MicropostsModule } from './controllers/microposts/microposts.module';

@Module({
  imports: [
  UsersModule,
  ContactsModule,
  SessionsModule,  
  MicropostsModule,     
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}