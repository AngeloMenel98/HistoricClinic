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
exports.DiagnosesService = void 0;
const common_1 = require("@nestjs/common");
const diagnose_repository_1 = require("../repository/diagnose.repository");
const diagnosis_entity_1 = require("../entities/diagnosis.entity");
const appointments_service_1 = require("../../appointments/service/appointments.service");
let DiagnosesService = class DiagnosesService {
    constructor(diagnosisRepo, appointService) {
        this.diagnosisRepo = diagnosisRepo;
        this.appointService = appointService;
    }
    async create(diagnosisDTO, userId) {
        const appoint = await this.appointService.findByIdWithInfo(diagnosisDTO.appointmentId);
        if (appoint.diagnosis) {
            throw new common_1.ConflictException('Appointment already has a diagnosis');
        }
        const diagnosis = new diagnosis_entity_1.Diagnosis();
        diagnosis.description = diagnosisDTO.description;
        diagnosis.appointment = appoint;
        return this.diagnosisRepo.createDiagnosis(diagnosis);
    }
    findAll() {
        return `This action returns all diagnoses`;
    }
    findOne(id) {
        return `This action returns a #${id} diagnosis`;
    }
    update(id, updateDiagnosisDto) {
        return `This action updates a #${id} diagnosis`;
    }
    remove(id) {
        return `This action removes a #${id} diagnosis`;
    }
};
exports.DiagnosesService = DiagnosesService;
exports.DiagnosesService = DiagnosesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [diagnose_repository_1.DiagnosisRepository,
        appointments_service_1.AppointmentsService])
], DiagnosesService);
//# sourceMappingURL=diagnoses.service.js.map