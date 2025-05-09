import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDentistDto } from '../dto/create-dentist.dto';
import { UpdateDentistDto } from '../dto/update-dentist.dto';
import { UsersService } from 'src/users/service/users.service';
import { DentistRepository } from '../repository/dentist.repository';
import { Dentist } from '../entities/dentist.entity';

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

  async findAll() {
    const dentists = await this.dentistRepo.find();

    if (!dentists) {
      throw new NotFoundException(`There is any dentist created.`);
    }

    return dentists;
  }

  async findOne(id: string) {
    const dentist = await this.dentistRepo.findOneBy({ id });

    if (!dentist) {
      throw new NotFoundException(`Dentist with id ${id} not found`);
    }

    return dentist;
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
