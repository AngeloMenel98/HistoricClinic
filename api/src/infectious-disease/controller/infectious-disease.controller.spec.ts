import { Test, TestingModule } from '@nestjs/testing';
import { InfectiousDiseaseController } from './infectious-disease.controller';
import { InfectiousDiseaseService } from '../service/infectious-disease.service';

describe('InfectiousDiseaseController', () => {
  let controller: InfectiousDiseaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfectiousDiseaseController],
      providers: [InfectiousDiseaseService],
    }).compile();

    controller = module.get<InfectiousDiseaseController>(
      InfectiousDiseaseController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
