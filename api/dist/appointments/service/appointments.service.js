"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const appointment_entity_1 = require("../entities/appointment.entity");
const dentists_service_1 = require("../../dentists/service/dentists.service");
const patients_service_1 = require("../../patients/service/patients.service");
const appointment_repository_1 = require("../repository/appointment.repository");
const procedures_service_1 = require("../../procedures/service/procedures.service");
let AppointmentsService = class AppointmentsService {
    constructor(appointRepository, dentistService, patientService, procedureService) {
        this.appointRepository = appointRepository;
        this.dentistService = dentistService;
        this.patientService = patientService;
        this.procedureService = procedureService;
    }
    async create(appointDTO, userId) {
        const dentist = await this.dentistService.findOne(appointDTO.dentistId);
        const patient = await this.patientService.findOne(appointDTO.patientId);
        const procedure = await this.getOrCreateProcedure(appointDTO.code, appointDTO.newCode);
        const appoint = new appointment_entity_1.Appointment();
        appoint.appointmentDate = appointDTO.appointmentDate;
        appoint.dentist = dentist;
        appoint.patient = patient;
        appoint.procedure = procedure;
        return this.appointRepository.createAppointment(appoint);
    }
    findAll() {
        return `This action returns all appointents`;
    }
    findOne(id) {
        return `This action returns a #${id} appointent`;
    }
    async findByIdWithInfo(id) {
        const appoint = await this.appointRepository.findByIdWithInfo(id);
        if (!appoint) {
            throw new common_1.NotFoundException(`User with Id #${id} not Found`);
        }
        return appoint;
    }
    update(id, updateAppointentDto) {
        return `This action updates a #${id} appointent`;
    }
    remove(id) {
        return `This action removes a #${id} appointent`;
    }
    async getOrCreateProcedure(codeId, newCode) {
        if (newCode) {
            return this.procedureService.create({ code: newCode });
        }
        return this.procedureService.findById(codeId);
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [appointment_repository_1.AppointmentRepository,
        dentists_service_1.DentistsService,
        patients_service_1.PatientsService,
        procedures_service_1.ProceduresService])
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map