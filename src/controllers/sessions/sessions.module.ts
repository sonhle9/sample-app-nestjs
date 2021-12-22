import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from '../contacts/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
  ],
  providers: [SessionsService],
  controllers: [SessionsController]
})
export class SessionsModule {}
