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
exports.PatientAddInfoController = void 0;
const common_1 = require("@nestjs/common");
const create_patient_add_info_dto_1 = require("../dto/create-patient-add-info.dto");
const update_patient_add_info_dto_1 = require("../dto/update-patient-add-info.dto");
const patient_add_info_service_1 = require("../service/patient-add-info.service");
let PatientAddInfoController = class PatientAddInfoController {
    constructor(patientAddInfoService) {
        this.patientAddInfoService = patientAddInfoService;
    }
    create(createPatientAddInfoDto) {
        return this.patientAddInfoService.create(createPatientAddInfoDto);
    }
    findAll() {
        return this.patientAddInfoService.findAll();
    }
    findOne(id) {
        return this.patientAddInfoService.findOne(+id);
    }
    update(id, updatePatientAddInfoDto) {
        return this.patientAddInfoService.update(+id, updatePatientAddInfoDto);
    }
    remove(id) {
        return this.patientAddInfoService.remove(+id);
    }
};
exports.PatientAddInfoController = PatientAddInfoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patient_add_info_dto_1.CreatePatientAddInfoDto]),
    __metadata("design:returntype", void 0)
], PatientAddInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatientAddInfoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatientAddInfoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_patient_add_info_dto_1.UpdatePatientAddInfoDto]),
    __metadata("design:returntype", void 0)
], PatientAddInfoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatientAddInfoController.prototype, "remove", null);
exports.PatientAddInfoController = PatientAddInfoController = __decorate([
    (0, common_1.Controller)('patient-add-info'),
    __metadata("design:paramtypes", [patient_add_info_service_1.PatientAddInfoService])
], PatientAddInfoController);
//# sourceMappingURL=patient-add-info.controller.js.map