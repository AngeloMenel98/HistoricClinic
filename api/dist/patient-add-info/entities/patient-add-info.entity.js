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
exports.PatientAddInfo = void 0;
const patient_entity_1 = require("../../patients/entities/patient.entity");
const typeorm_1 = require("typeorm");
let PatientAddInfo = class PatientAddInfo {
};
exports.PatientAddInfo = PatientAddInfo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PatientAddInfo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PatientAddInfo.prototype, "hasBreathingProblems", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PatientAddInfo.prototype, "isPregnant", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => patient_entity_1.Patient, (patient) => patient.addedInfo),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], PatientAddInfo.prototype, "patient", void 0);
exports.PatientAddInfo = PatientAddInfo = __decorate([
    (0, typeorm_1.Entity)('pat_added_info')
], PatientAddInfo);
//# sourceMappingURL=patient-add-info.entity.js.map