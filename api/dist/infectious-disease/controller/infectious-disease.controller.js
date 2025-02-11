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
exports.InfectiousDiseaseController = void 0;
const common_1 = require("@nestjs/common");
const infectious_disease_service_1 = require("../service/infectious-disease.service");
const create_infectious_disease_dto_1 = require("../dto/create-infectious-disease.dto");
const update_infectious_disease_dto_1 = require("../dto/update-infectious-disease.dto");
let InfectiousDiseaseController = class InfectiousDiseaseController {
    constructor(infectiousDiseaseService) {
        this.infectiousDiseaseService = infectiousDiseaseService;
    }
    create(createInfectiousDiseaseDto) {
        return this.infectiousDiseaseService.create(createInfectiousDiseaseDto);
    }
    findAll() {
        return this.infectiousDiseaseService.findAll();
    }
    findOne(id) {
        return this.infectiousDiseaseService.findOne(+id);
    }
    update(id, updateInfectiousDiseaseDto) {
        return this.infectiousDiseaseService.update(+id, updateInfectiousDiseaseDto);
    }
    remove(id) {
        return this.infectiousDiseaseService.remove(+id);
    }
};
exports.InfectiousDiseaseController = InfectiousDiseaseController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_infectious_disease_dto_1.CreateInfectiousDiseaseDto]),
    __metadata("design:returntype", void 0)
], InfectiousDiseaseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InfectiousDiseaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InfectiousDiseaseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_infectious_disease_dto_1.UpdateInfectiousDiseaseDto]),
    __metadata("design:returntype", void 0)
], InfectiousDiseaseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InfectiousDiseaseController.prototype, "remove", null);
exports.InfectiousDiseaseController = InfectiousDiseaseController = __decorate([
    (0, common_1.Controller)('infectious-disease'),
    __metadata("design:paramtypes", [infectious_disease_service_1.InfectiousDiseaseService])
], InfectiousDiseaseController);
//# sourceMappingURL=infectious-disease.controller.js.map