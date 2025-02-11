"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosesModule = void 0;
const common_1 = require("@nestjs/common");
const diagnoses_controller_1 = require("./controller/diagnoses.controller");
const diagnoses_service_1 = require("./service/diagnoses.service");
const typeorm_1 = require("@nestjs/typeorm");
const diagnosis_entity_1 = require("./entities/diagnosis.entity");
const diagnose_repository_1 = require("./repository/diagnose.repository");
const appointments_module_1 = require("../appointments/appointments.module");
let DiagnosesModule = class DiagnosesModule {
};
exports.DiagnosesModule = DiagnosesModule;
exports.DiagnosesModule = DiagnosesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([diagnosis_entity_1.Diagnosis]), appointments_module_1.AppointmentsModule],
        controllers: [diagnoses_controller_1.DiagnosesController],
        providers: [diagnoses_service_1.DiagnosesService, diagnose_repository_1.DiagnosisRepository],
    })
], DiagnosesModule);
//# sourceMappingURL=diagnoses.module.js.map