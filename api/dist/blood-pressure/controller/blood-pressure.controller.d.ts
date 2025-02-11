import { BloodPressureService } from '../service/blood-pressure.service';
import { CreateBloodPressureDto } from '../dto/create-blood-pressure.dto';
import { UpdateBloodPressureDto } from '../dto/update-blood-pressure.dto';
export declare class BloodPressureController {
    private readonly bloodPressureService;
    constructor(bloodPressureService: BloodPressureService);
    create(createBloodPressureDto: CreateBloodPressureDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBloodPressureDto: UpdateBloodPressureDto): string;
    remove(id: string): string;
}
