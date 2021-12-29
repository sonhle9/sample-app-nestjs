import { Module } from '@nestjs/common';
import { PasswordResetsController } from './password-resets.controller';

@Module({
  controllers: [PasswordResetsController]
})
export class PasswordResetsModule {}
