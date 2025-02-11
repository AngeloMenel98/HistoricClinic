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
exports.MedicalConditionsController = void 0;
const common_1 = require("@nestjs/common");
const create_medical_condition_dto_1 = require("../dto/create-medical-condition.dto");
const update_medical_condition_dto_1 = require("../dto/update-medical-condition.dto");
const medical_conditions_service_1 = require("../service/medical-conditions.service");
let MedicalConditionsController = class MedicalConditionsController {
    constructor(medicalConditionsService) {
        this.medicalConditionsService = medicalConditionsService;
    }
    create(createMedicalConditionDto) {
        return this.medicalConditionsService.create(createMedicalConditionDto);
    }
    findAll() {
        return this.medicalConditionsService.findAll();
    }
    findOne(id) {
        return this.medicalConditionsService.findOne(+id);
    }
    update(id, updateMedicalConditionDto) {
        return this.medicalConditionsService.update(+id, updateMedicalConditionDto);
    }
    remove(id) {
        return this.medicalConditionsService.remove(+id);
    }
};
exports.MedicalConditionsController = MedicalConditionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medical_condition_dto_1.CreateMedicalConditionDto]),
    __metadata("design:returntype", void 0)
], MedicalConditionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicalConditionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicalConditionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medical_condition_dto_1.UpdateMedicalConditionDto]),
    __metadata("design:returntype", void 0)
], MedicalConditionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicalConditionsController.prototype, "remove", null);
exports.MedicalConditionsController = MedicalConditionsController = __decorate([
    (0, common_1.Controller)('medical-conditions'),
    __metadata("design:paramtypes", [medical_conditions_service_1.MedicalConditionsService])
], MedicalConditionsController);
//# sourceMappingURL=medical-conditions.controller.js.map