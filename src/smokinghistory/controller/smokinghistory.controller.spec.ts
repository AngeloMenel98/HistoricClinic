import { Test, TestingModule } from '@nestjs/testing';
import { SmokinghistoryService } from '../service/smokinghistory.service';
import { SmokinghistoryController } from './smokinghistory.controller';
describe('SmokinghistoryController', () => {
  let controller: SmokinghistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmokinghistoryController],
      providers: [SmokinghistoryService],
    }).compile();

    controller = module.get<SmokinghistoryController>(SmokinghistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
