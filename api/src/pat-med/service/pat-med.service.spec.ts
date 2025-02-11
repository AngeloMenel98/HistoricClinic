import { Test, TestingModule } from '@nestjs/testing';
import { PatMedService } from './pat-med.service';

describe('PatMedService', () => {
  let service: PatMedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatMedService],
    }).compile();

    service = module.get<PatMedService>(PatMedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
