import { ConflictException, Injectable } from '@nestjs/common';
import { CreateDentistDto } from '../dto/create-dentist.dto';
import { UpdateDentistDto } from '../dto/update-dentist.dto';
import { UsersService } from 'src/users/service/users.service';
import { DentistRepository } from '../repository/dentist.repository';
import { Dentist } from '../entities/dentist.entity';
import { ResDentistDto } from '../dto/response-dentist.dto';

@Injectable()
export class DentistsService {
  constructor(
    private dentistRepo: DentistRepository,
    private userService: UsersService,
  ) {}
  async create(dentistDTO: CreateDentistDto, userId: string) {
    const user = await this.userService.findOne(userId);
    await this.findByProfessionalId(dentistDTO.professionalId);

    const dentist = new Dentist();
    dentist.name = dentistDTO.name;
    dentist.lastName = dentistDTO.lastName;
    dentist.professionalId = dentistDTO.professionalId;
    dentist.phoneNumber = dentistDTO.phoneNumber;
    dentist.user = user;

    return this.dentistRepo.createDentist(dentist);
  }

  findAll() {
    return `This action returns all dentists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dentist`;
  }

  async findByProfessionalId(professionalId: string) {
    const dentist = await this.dentistRepo.findOneBy({ professionalId });

    if (dentist) {
      throw new ConflictException(
        `Dentist with Professional Id #${professionalId} already exist`,
      );
    }

    return dentist;
  }

  update(id: number, updateDentistDto: UpdateDentistDto) {
    return `This action updates a #${id} dentist`;
  }

  remove(id: number) {
    return `This action removes a #${id} dentist`;
  }
}
