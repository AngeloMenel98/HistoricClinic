import { Test, TestingModule } from '@nestjs/testing';
import { LiverDiseaseController } from './liverdisease.controller';
import { LiverDiseaseService } from '../service/liverdisease.service';
describe('LiverdiseaseController', () => {
  let controller: LiverDiseaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiverDiseaseController],
      providers: [LiverDiseaseService],
    }).compile();

    controller = module.get<LiverDiseaseController>(LiverDiseaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
