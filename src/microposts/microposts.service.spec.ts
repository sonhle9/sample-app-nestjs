import { Test, TestingModule } from '@nestjs/testing';
import { MicropostsService } from './microposts.service';

describe('MicropostsService', () => {
  let service: MicropostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicropostsService],
    }).compile();

    service = module.get<MicropostsService>(MicropostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
