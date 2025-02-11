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
exports.Patient = void 0;
const appointment_entity_1 = require("../../appointments/entities/appointment.entity");
const blood_pressure_entity_1 = require("../../blood-pressure/entities/blood-pressure.entity");
const infectious_disease_entity_1 = require("../../infectious-disease/entities/infectious-disease.entity");
const liverdisease_entity_1 = require("../../liverdisease/entities/liverdisease.entity");
const medication_pat_entity_1 = require("../../medication-pat/entities/medication-pat.entity");
const op_pat_entity_1 = require("../../op-pat/entities/op-pat.entity");
const pat_med_entity_1 = require("../../pat-med/entities/pat-med.entity");
const patient_add_info_entity_1 = require("../../patient-add-info/entities/patient-add-info.entity");
const smokinghistory_entity_1 = require("../../smokinghistory/entities/smokinghistory.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Patient = class Patient {
};
exports.Patient = Patient;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Patient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 25 }),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 25 }),
    __metadata("design:type", String)
], Patient.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Patient.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Patient.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 25 }),
    __metadata("design:type", String)
], Patient.prototype, "occupation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Patient.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Patient.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Patient.prototype, "cuit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Patient.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Patient.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Patient.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.patients),
    __metadata("design:type", user_entity_1.User)
], Patient.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (appointment) => appointment.patient),
    __metadata("design:type", Array)
], Patient.prototype, "appointments", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => blood_pressure_entity_1.BloodPressure, (bloodPressure) => bloodPressure.patient),
    __metadata("design:type", blood_pressure_entity_1.BloodPressure)
], Patient.prototype, "bloodPressure", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => infectious_disease_entity_1.InfectiousDisease, (infdis) => infdis.patients),
    __metadata("design:type", Array)
], Patient.prototype, "infDiseases", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => liverdisease_entity_1.LiverDisease, (liver) => liver.patients),
    __metadata("design:type", Array)
], Patient.prototype, "liverDiseases", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pat_med_entity_1.PatMed, (patMed) => patMed.patient),
    __metadata("design:type", Array)
], Patient.prototype, "patMeds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medication_pat_entity_1.MedicationPat, (medPat) => medPat.patient),
    __metadata("design:type", Array)
], Patient.prototype, "medPats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => op_pat_entity_1.OpPat, (opPat) => opPat.patient),
    __metadata("design:type", Array)
], Patient.prototype, "opPats", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => patient_add_info_entity_1.PatientAddInfo, (addInfo) => addInfo.patient),
    __metadata("design:type", patient_add_info_entity_1.PatientAddInfo)
], Patient.prototype, "addedInfo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => smokinghistory_entity_1.SmokingHistory, (smoke) => smoke.patient),
    __metadata("design:type", smokinghistory_entity_1.SmokingHistory)
], Patient.prototype, "smoke", void 0);
exports.Patient = Patient = __decorate([
    (0, typeorm_1.Entity)('patients')
], Patient);
//# sourceMappingURL=patient.entity.js.map