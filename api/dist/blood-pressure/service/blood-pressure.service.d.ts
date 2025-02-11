import { CreateBloodPressureDto } from '../dto/create-blood-pressure.dto';
import { UpdateBloodPressureDto } from '../dto/update-blood-pressure.dto';
export declare class BloodPressureService {
    create(createBloodPressureDto: CreateBloodPressureDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBloodPressureDto: UpdateBloodPressureDto): string;
    remove(id: number): string;
}
