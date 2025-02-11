import { Test, TestingModule } from '@nestjs/testing';
import { PatientAddInfoService } from './patient-add-info.service';

describe('PatientAddInfoService', () => {
  let service: PatientAddInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientAddInfoService],
    }).compile();

    service = module.get<PatientAddInfoService>(PatientAddInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
