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
exports.BloodPressureController = void 0;
const common_1 = require("@nestjs/common");
const blood_pressure_service_1 = require("../service/blood-pressure.service");
const create_blood_pressure_dto_1 = require("../dto/create-blood-pressure.dto");
const update_blood_pressure_dto_1 = require("../dto/update-blood-pressure.dto");
let BloodPressureController = class BloodPressureController {
    constructor(bloodPressureService) {
        this.bloodPressureService = bloodPressureService;
    }
    create(createBloodPressureDto) {
        return this.bloodPressureService.create(createBloodPressureDto);
    }
    findAll() {
        return this.bloodPressureService.findAll();
    }
    findOne(id) {
        return this.bloodPressureService.findOne(+id);
    }
    update(id, updateBloodPressureDto) {
        return this.bloodPressureService.update(+id, updateBloodPressureDto);
    }
    remove(id) {
        return this.bloodPressureService.remove(+id);
    }
};
exports.BloodPressureController = BloodPressureController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blood_pressure_dto_1.CreateBloodPressureDto]),
    __metadata("design:returntype", void 0)
], BloodPressureController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BloodPressureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BloodPressureController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blood_pressure_dto_1.UpdateBloodPressureDto]),
    __metadata("design:returntype", void 0)
], BloodPressureController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BloodPressureController.prototype, "remove", null);
exports.BloodPressureController = BloodPressureController = __decorate([
    (0, common_1.Controller)('blood-pressure'),
    __metadata("design:paramtypes", [blood_pressure_service_1.BloodPressureService])
], BloodPressureController);
//# sourceMappingURL=blood-pressure.controller.js.map