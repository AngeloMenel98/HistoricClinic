import { Injectable } from '@nestjs/common';
import { CreateOpPatDto } from '../dto/create-op-pat.dto';
import { UpdateOpPatDto } from '../dto/update-op-pat.dto';

@Injectable()
export class OpPatService {
  create(createOpPatDto: CreateOpPatDto) {
    return 'This action adds a new opPat';
  }

  findAll() {
    return `This action returns all opPat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opPat`;
  }

  update(id: number, updateOpPatDto: UpdateOpPatDto) {
    return `This action updates a #${id} opPat`;
  }

  remove(id: number) {
    return `This action removes a #${id} opPat`;
  }
}
