import { Test, TestingModule } from '@nestjs/testing';
import { PatientAddInfoService } from '../service/patient-add-info.service';
import { PatientAddInfoController } from './patient-add-info.controller';

describe('PatientAddInfoController', () => {
  let controller: PatientAddInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientAddInfoController],
      providers: [PatientAddInfoService],
    }).compile();

    controller = module.get<PatientAddInfoController>(PatientAddInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
