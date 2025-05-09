import { Injectable } from '@nestjs/common';
import { CreateSmokinghistoryDto } from '../dto/create-smokinghistory.dto';
import { UpdateSmokinghistoryDto } from '../dto/update-smokinghistory.dto';

@Injectable()
export class SmokinghistoryService {
  create(createSmokinghistoryDto: CreateSmokinghistoryDto) {
    return 'This action adds a new smokinghistory';
  }

  findAll() {
    return `This action returns all smokinghistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smokinghistory`;
  }

  update(id: number, updateSmokinghistoryDto: UpdateSmokinghistoryDto) {
    return `This action updates a #${id} smokinghistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} smokinghistory`;
  }
}
