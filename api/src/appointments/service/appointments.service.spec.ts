import { Test, TestingModule } from '@nestjs/testing';
import { AppointentsService } from './appointments.service';

describe('AppointentsService', () => {
  let service: AppointentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointentsService],
    }).compile();

    service = module.get<AppointentsService>(AppointentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
