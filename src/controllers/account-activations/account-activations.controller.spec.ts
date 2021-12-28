import { Test, TestingModule } from '@nestjs/testing';
import { AccountActivationsController } from './account-activations.controller';

describe('AccountActivationsController', () => {
  let controller: AccountActivationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountActivationsController],
    }).compile();

    controller = module.get<AccountActivationsController>(AccountActivationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
