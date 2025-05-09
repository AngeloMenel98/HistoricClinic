import { Test, TestingModule } from '@nestjs/testing';
import { AppointentsController } from './appointments.controller';
import { AppointentsService } from '../service/appointments.service';

describe('AppointentsController', () => {
  let controller: AppointentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointentsController],
      providers: [AppointentsService],
    }).compile();

    controller = module.get<AppointentsController>(AppointentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
