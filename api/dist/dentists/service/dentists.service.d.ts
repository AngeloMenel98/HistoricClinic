import { CreateDentistDto } from '../dto/create-dentist.dto';
import { UpdateDentistDto } from '../dto/update-dentist.dto';
import { UsersService } from 'src/users/service/users.service';
import { DentistRepository } from '../repository/dentist.repository';
import { Dentist } from '../entities/dentist.entity';
export declare class DentistsService {
    private dentistRepo;
    private userService;
    constructor(dentistRepo: DentistRepository, userService: UsersService);
    create(dentistDTO: CreateDentistDto, userId: string): Promise<Dentist>;
    findAll(): string;
    findOne(id: string): Promise<Dentist>;
    findByProfessionalId(professionalId: string): Promise<Dentist>;
    update(id: number, updateDentistDto: UpdateDentistDto): string;
    remove(id: number): string;
}
