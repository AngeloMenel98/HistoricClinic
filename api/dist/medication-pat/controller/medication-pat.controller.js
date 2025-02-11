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
exports.MedicationPatController = void 0;
const common_1 = require("@nestjs/common");
const create_medication_pat_dto_1 = require("../dto/create-medication-pat.dto");
const update_medication_pat_dto_1 = require("../dto/update-medication-pat.dto");
const medication_pat_service_1 = require("../service/medication-pat.service");
let MedicationPatController = class MedicationPatController {
    constructor(medicationPatService) {
        this.medicationPatService = medicationPatService;
    }
    create(createMedicationPatDto) {
        return this.medicationPatService.create(createMedicationPatDto);
    }
    findAll() {
        return this.medicationPatService.findAll();
    }
    findOne(id) {
        return this.medicationPatService.findOne(+id);
    }
    update(id, updateMedicationPatDto) {
        return this.medicationPatService.update(+id, updateMedicationPatDto);
    }
    remove(id) {
        return this.medicationPatService.remove(+id);
    }
};
exports.MedicationPatController = MedicationPatController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medication_pat_dto_1.CreateMedicationPatDto]),
    __metadata("design:returntype", void 0)
], MedicationPatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicationPatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicationPatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medication_pat_dto_1.UpdateMedicationPatDto]),
    __metadata("design:returntype", void 0)
], MedicationPatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicationPatController.prototype, "remove", null);
exports.MedicationPatController = MedicationPatController = __decorate([
    (0, common_1.Controller)('medication-pat'),
    __metadata("design:paramtypes", [medication_pat_service_1.MedicationPatService])
], MedicationPatController);
//# sourceMappingURL=medication-pat.controller.js.map