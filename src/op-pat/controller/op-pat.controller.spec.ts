import { Test, TestingModule } from '@nestjs/testing';
import { OpPatController } from './op-pat.controller';
import { OpPatService } from '../service/op-pat.service';

describe('OpPatController', () => {
  let controller: OpPatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpPatController],
      providers: [OpPatService],
    }).compile();

    controller = module.get<OpPatController>(OpPatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
