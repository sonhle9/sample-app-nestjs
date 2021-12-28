import { Test, TestingModule } from '@nestjs/testing';
import { PasswordResetsController } from './password-resets.controller';

describe('PasswordResetsController', () => {
  let controller: PasswordResetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasswordResetsController],
    }).compile();

    controller = module.get<PasswordResetsController>(PasswordResetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
