import { Test, TestingModule } from '@nestjs/testing';
import { LiverdiseaseService } from './liverdisease.service';

describe('LiverdiseaseService', () => {
  let service: LiverdiseaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiverdiseaseService],
    }).compile();

    service = module.get<LiverdiseaseService>(LiverdiseaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
