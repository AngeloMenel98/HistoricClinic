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
exports.PatMedController = void 0;
const common_1 = require("@nestjs/common");
const pat_med_service_1 = require("../service/pat-med.service");
const create_pat_med_dto_1 = require("../dto/create-pat-med.dto");
const update_pat_med_dto_1 = require("../dto/update-pat-med.dto");
let PatMedController = class PatMedController {
    constructor(patMedService) {
        this.patMedService = patMedService;
    }
    create(createPatMedDto) {
        return this.patMedService.create(createPatMedDto);
    }
    findAll() {
        return this.patMedService.findAll();
    }
    findOne(id) {
        return this.patMedService.findOne(+id);
    }
    update(id, updatePatMedDto) {
        return this.patMedService.update(+id, updatePatMedDto);
    }
    remove(id) {
        return this.patMedService.remove(+id);
    }
};
exports.PatMedController = PatMedController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pat_med_dto_1.CreatePatMedDto]),
    __metadata("design:returntype", void 0)
], PatMedController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatMedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatMedController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pat_med_dto_1.UpdatePatMedDto]),
    __metadata("design:returntype", void 0)
], PatMedController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatMedController.prototype, "remove", null);
exports.PatMedController = PatMedController = __decorate([
    (0, common_1.Controller)('pat-med'),
    __metadata("design:paramtypes", [pat_med_service_1.PatMedService])
], PatMedController);
//# sourceMappingURL=pat-med.controller.js.map