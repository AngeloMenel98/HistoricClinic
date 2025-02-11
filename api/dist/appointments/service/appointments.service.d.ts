import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { Appointment } from '../entities/appointment.entity';
import { DentistsService } from 'src/dentists/service/dentists.service';
import { PatientsService } from 'src/patients/service/patients.service';
import { AppointmentRepository } from '../repository/appointment.repository';
import { ProceduresService } from 'src/procedures/service/procedures.service';
export declare class AppointmentsService {
    private readonly appointRepository;
    private readonly dentistService;
    private readonly patientService;
    private readonly procedureService;
    constructor(appointRepository: AppointmentRepository, dentistService: DentistsService, patientService: PatientsService, procedureService: ProceduresService);
    create(appointDTO: CreateAppointmentDto, userId: string): Promise<Appointment>;
    findAll(): string;
    findOne(id: number): string;
    findByIdWithInfo(id: string): Promise<Appointment>;
    update(id: number, updateAppointentDto: UpdateAppointmentDto): string;
    remove(id: number): string;
    private getOrCreateProcedure;
}
