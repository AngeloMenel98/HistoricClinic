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
exports.OpPatController = void 0;
const common_1 = require("@nestjs/common");
const create_op_pat_dto_1 = require("../dto/create-op-pat.dto");
const update_op_pat_dto_1 = require("../dto/update-op-pat.dto");
const op_pat_service_1 = require("../service/op-pat.service");
let OpPatController = class OpPatController {
    constructor(opPatService) {
        this.opPatService = opPatService;
    }
    create(createOpPatDto) {
        return this.opPatService.create(createOpPatDto);
    }
    findAll() {
        return this.opPatService.findAll();
    }
    findOne(id) {
        return this.opPatService.findOne(+id);
    }
    update(id, updateOpPatDto) {
        return this.opPatService.update(+id, updateOpPatDto);
    }
    remove(id) {
        return this.opPatService.remove(+id);
    }
};
exports.OpPatController = OpPatController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_op_pat_dto_1.CreateOpPatDto]),
    __metadata("design:returntype", void 0)
], OpPatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpPatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpPatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_op_pat_dto_1.UpdateOpPatDto]),
    __metadata("design:returntype", void 0)
], OpPatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpPatController.prototype, "remove", null);
exports.OpPatController = OpPatController = __decorate([
    (0, common_1.Controller)('op-pat'),
    __metadata("design:paramtypes", [op_pat_service_1.OpPatService])
], OpPatController);
//# sourceMappingURL=op-pat.controller.js.map