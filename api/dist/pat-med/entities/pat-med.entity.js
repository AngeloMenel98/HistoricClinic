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
exports.PatMed = void 0;
const medical_condition_entity_1 = require("../../medical-conditions/entities/medical-condition.entity");
const patient_entity_1 = require("../../patients/entities/patient.entity");
const typeorm_1 = require("typeorm");
let PatMed = class PatMed {
};
exports.PatMed = PatMed;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], PatMed.prototype, "conditionId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], PatMed.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], PatMed.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medical_condition_entity_1.MedicalCondition, (med) => med.patMeds),
    __metadata("design:type", medical_condition_entity_1.MedicalCondition)
], PatMed.prototype, "condition", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, (patient) => patient.patMeds),
    __metadata("design:type", patient_entity_1.Patient)
], PatMed.prototype, "patient", void 0);
exports.PatMed = PatMed = __decorate([
    (0, typeorm_1.Entity)('pat_med')
], PatMed);
//# sourceMappingURL=pat-med.entity.js.map