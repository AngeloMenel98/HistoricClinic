import { AppointmentsService } from '../service/appointments.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { ResAppointDTO } from '../dto/response-appointment.dto';
export declare class AppointmentsController {
    private readonly appointService;
    constructor(appointService: AppointmentsService);
    create(appointDTO: CreateAppointmentDto, userId: string): Promise<ResAppointDTO>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAppointentDto: UpdateAppointmentDto): string;
    remove(id: string): string;
}
