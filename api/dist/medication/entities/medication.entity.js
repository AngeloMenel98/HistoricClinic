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
exports.Medication = void 0;
const medication_pat_entity_1 = require("../../medication-pat/entities/medication-pat.entity");
const typeorm_1 = require("typeorm");
let Medication = class Medication {
};
exports.Medication = Medication;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Medication.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Medication.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Medication.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medication_pat_entity_1.MedicationPat, (medPat) => medPat.medication),
    __metadata("design:type", Array)
], Medication.prototype, "medPats", void 0);
exports.Medication = Medication = __decorate([
    (0, typeorm_1.Entity)('medications')
], Medication);
//# sourceMappingURL=medication.entity.js.map