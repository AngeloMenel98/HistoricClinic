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
exports.LiverDiseaseController = void 0;
const common_1 = require("@nestjs/common");
const create_liverdisease_dto_1 = require("../dto/create-liverdisease.dto");
const update_liverdisease_dto_1 = require("../dto/update-liverdisease.dto");
const liverdisease_service_1 = require("../service/liverdisease.service");
let LiverDiseaseController = class LiverDiseaseController {
    constructor(liverService) {
        this.liverService = liverService;
    }
    create(createLiverdiseaseDto) {
        return this.liverService.create(createLiverdiseaseDto);
    }
    findAll() {
        return this.liverService.findAll();
    }
    findOne(id) {
        return this.liverService.findOne(+id);
    }
    update(id, updateLiverdiseaseDto) {
        return this.liverService.update(+id, updateLiverdiseaseDto);
    }
    remove(id) {
        return this.liverService.remove(+id);
    }
};
exports.LiverDiseaseController = LiverDiseaseController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_liverdisease_dto_1.CreateLiverdiseaseDto]),
    __metadata("design:returntype", void 0)
], LiverDiseaseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LiverDiseaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LiverDiseaseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_liverdisease_dto_1.UpdateLiverdiseaseDto]),
    __metadata("design:returntype", void 0)
], LiverDiseaseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LiverDiseaseController.prototype, "remove", null);
exports.LiverDiseaseController = LiverDiseaseController = __decorate([
    (0, common_1.Controller)('liverdisease'),
    __metadata("design:paramtypes", [liverdisease_service_1.LiverDiseaseService])
], LiverDiseaseController);
//# sourceMappingURL=liverdisease.controller.js.map