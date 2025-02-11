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
exports.MedicationPat = void 0;
const medication_entity_1 = require("../../medication/entities/medication.entity");
const patient_entity_1 = require("../../patients/entities/patient.entity");
const typeorm_1 = require("typeorm");
let MedicationPat = class MedicationPat {
};
exports.MedicationPat = MedicationPat;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], MedicationPat.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], MedicationPat.prototype, "medicationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], MedicationPat.prototype, "dosage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], MedicationPat.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medication_entity_1.Medication, (medication) => medication.medPats),
    __metadata("design:type", medication_entity_1.Medication)
], MedicationPat.prototype, "medication", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, (patient) => patient.medPats),
    __metadata("design:type", patient_entity_1.Patient)
], MedicationPat.prototype, "patient", void 0);
exports.MedicationPat = MedicationPat = __decorate([
    (0, typeorm_1.Entity)('medication_pat')
], MedicationPat);
//# sourceMappingURL=medication-pat.entity.js.map