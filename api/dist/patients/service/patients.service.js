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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const patient_repository_1 = require("../repository/patient.repository");
const users_service_1 = require("../../users/service/users.service");
const patient_entity_1 = require("../entities/patient.entity");
let PatientsService = class PatientsService {
    constructor(patientRepository, userService) {
        this.patientRepository = patientRepository;
        this.userService = userService;
    }
    async create(patientDTO, userId) {
        const user = await this.userService.findOne(userId);
        const patient = new patient_entity_1.Patient();
        patient.name = patientDTO.name;
        patient.lastName = patientDTO.lastName;
        patient.dni = patientDTO.dni;
        patient.cuit = patientDTO.cuit;
        patient.birthDate = patientDTO.birthDate;
        patient.occupation = patientDTO.occupation;
        patient.address = patientDTO.address;
        patient.phoneNumber = patientDTO.phoneNumber;
        patient.email = patientDTO.email;
        patient.user = user;
        return this.patientRepository.save(patient);
    }
    findAll() {
        return `This action returns all patients`;
    }
    async findOne(id) {
        const dentist = await this.patientRepository.findOneBy({ id });
        if (!dentist) {
            throw new common_1.NotFoundException(`Patient with id ${id} not found`);
        }
        return dentist;
    }
    update(id, updatePatientDto) {
        return `This action updates a #${id} patient`;
    }
    remove(id) {
        return `This action removes a #${id} patient`;
    }
};
exports.PatientsService = PatientsService;
exports.PatientsService = PatientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patient_repository_1.PatientRepository,
        users_service_1.UsersService])
], PatientsService);
//# sourceMappingURL=patients.service.js.map