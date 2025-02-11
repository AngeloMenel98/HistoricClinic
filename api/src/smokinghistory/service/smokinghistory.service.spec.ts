import { Test, TestingModule } from '@nestjs/testing';
import { SmokinghistoryService } from './smokinghistory.service';

describe('SmokinghistoryService', () => {
  let service: SmokinghistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmokinghistoryService],
    }).compile();

    service = module.get<SmokinghistoryService>(SmokinghistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
