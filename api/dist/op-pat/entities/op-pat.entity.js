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
exports.OpPat = void 0;
const operation_entity_1 = require("../../operation/entities/operation.entity");
const patient_entity_1 = require("../../patients/entities/patient.entity");
const typeorm_1 = require("typeorm");
let OpPat = class OpPat {
};
exports.OpPat = OpPat;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], OpPat.prototype, "operationId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], OpPat.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], OpPat.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => operation_entity_1.Operation, (operation) => operation.opPats),
    __metadata("design:type", operation_entity_1.Operation)
], OpPat.prototype, "operation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient, (patient) => patient.opPats),
    __metadata("design:type", patient_entity_1.Patient)
], OpPat.prototype, "patient", void 0);
exports.OpPat = OpPat = __decorate([
    (0, typeorm_1.Entity)('op_pat')
], OpPat);
//# sourceMappingURL=op-pat.entity.js.map