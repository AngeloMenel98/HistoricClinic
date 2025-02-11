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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const appointment_entity_1 = require("../entities/appointment.entity");
let AppointmentRepository = class AppointmentRepository extends typeorm_1.Repository {
    constructor(appointmentRepository, dataSource) {
        super(appointmentRepository.target, appointmentRepository.manager);
        this.appointmentRepository = appointmentRepository;
        this.dataSource = dataSource;
    }
    async createAppointment(appointment) {
        return this.dataSource.manager.transaction(async (manager) => {
            return manager.save(appointment);
        });
    }
    async findByIdWithInfo(id) {
        return this.createQueryBuilder('a')
            .innerJoin('a.patient', 'pat')
            .innerJoin('a.dentist', 'dent')
            .leftJoin('a.procedure', 'pro')
            .leftJoin('a.diagnosis', 'diag')
            .addSelect(['pat.id', 'dent.id', 'pro.id', 'diag.id'])
            .where('a.id = :id', { id })
            .getOne();
    }
};
exports.AppointmentRepository = AppointmentRepository;
exports.AppointmentRepository = AppointmentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(appointment_entity_1.Appointment)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], AppointmentRepository);
//# sourceMappingURL=appointment.repository.js.map