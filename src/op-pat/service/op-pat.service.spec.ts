import { Test, TestingModule } from '@nestjs/testing';
import { OpPatService } from './op-pat.service';
describe('OpPatService', () => {
  let service: OpPatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpPatService],
    }).compile();

    service = module.get<OpPatService>(OpPatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
