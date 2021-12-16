import { Module } from '@nestjs/common';
import { ContactsController } from './contacts/contacts.controller';
import { Contact } from './contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsService } from './contacts/contacts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
  ],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}