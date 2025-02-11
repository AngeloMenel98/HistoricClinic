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
exports.SmokingHistory = void 0;
const smoking_status_enum_1 = require("../../enum/smoking-status.enum");
const patient_entity_1 = require("../../patients/entities/patient.entity");
const typeorm_1 = require("typeorm");
let SmokingHistory = class SmokingHistory {
};
exports.SmokingHistory = SmokingHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SmokingHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: smoking_status_enum_1.SmokingStatus }),
    __metadata("design:type", String)
], SmokingHistory.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], SmokingHistory.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], SmokingHistory.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => patient_entity_1.Patient, (patient) => patient.smoke),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_entity_1.Patient)
], SmokingHistory.prototype, "patient", void 0);
exports.SmokingHistory = SmokingHistory = __decorate([
    (0, typeorm_1.Entity)('smoking_history')
], SmokingHistory);
//# sourceMappingURL=smokinghistory.entity.js.map