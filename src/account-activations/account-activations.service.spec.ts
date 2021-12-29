import { Test, TestingModule } from '@nestjs/testing';
import { AccountActivationsService } from './account-activations.service';

describe('AccountActivationsService', () => {
  let service: AccountActivationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountActivationsService],
    }).compile();

    service = module.get<AccountActivationsService>(AccountActivationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
