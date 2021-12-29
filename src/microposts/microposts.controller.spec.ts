import { Test, TestingModule } from '@nestjs/testing';
import { MicropostsController } from './microposts.controller';

describe('MicropostsController', () => {
  let controller: MicropostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicropostsController],
    }).compile();

    controller = module.get<MicropostsController>(MicropostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
