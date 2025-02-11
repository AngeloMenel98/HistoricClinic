import { DentistsService } from '../service/dentists.service';
import { CreateDentistDto } from '../dto/create-dentist.dto';
import { UpdateDentistDto } from '../dto/update-dentist.dto';
import { ResDentistDto } from '../dto/response-dentist.dto';
export declare class DentistsController {
    private readonly dentistsService;
    constructor(dentistsService: DentistsService);
    create(createDentistDto: CreateDentistDto, userId: string): Promise<ResDentistDto>;
    findAll(): string;
    findOne(id: string): Promise<import("../entities/dentist.entity").Dentist>;
    update(id: string, updateDentistDto: UpdateDentistDto): string;
    remove(id: string): string;
}
