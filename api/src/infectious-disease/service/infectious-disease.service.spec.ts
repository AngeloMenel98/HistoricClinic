import { Test, TestingModule } from '@nestjs/testing';
import { InfectiousDiseaseService } from './infectious-disease.service';

describe('InfectiousDiseaseService', () => {
  let service: InfectiousDiseaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfectiousDiseaseService],
    }).compile();

    service = module.get<InfectiousDiseaseService>(InfectiousDiseaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
