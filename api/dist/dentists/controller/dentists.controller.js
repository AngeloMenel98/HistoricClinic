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
exports.DentistsController = void 0;
const common_1 = require("@nestjs/common");
const dentists_service_1 = require("../service/dentists.service");
const create_dentist_dto_1 = require("../dto/create-dentist.dto");
const update_dentist_dto_1 = require("../dto/update-dentist.dto");
const user_id_decorator_1 = require("../../helpers/decorators/user-id.decorator");
let DentistsController = class DentistsController {
    constructor(dentistsService) {
        this.dentistsService = dentistsService;
    }
    async create(createDentistDto, userId) {
        const dentist = await this.dentistsService.create(createDentistDto, userId);
        return {
            id: dentist.id,
            name: dentist.name,
            lastName: dentist.lastName,
            professionalId: dentist.professionalId,
            userId: dentist.user.id,
        };
    }
    findAll() {
        return this.dentistsService.findAll();
    }
    findOne(id) {
        return this.dentistsService.findOne(id);
    }
    update(id, updateDentistDto) {
        return this.dentistsService.update(+id, updateDentistDto);
    }
    remove(id) {
        return this.dentistsService.remove(+id);
    }
};
exports.DentistsController = DentistsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_id_decorator_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dentist_dto_1.CreateDentistDto, String]),
    __metadata("design:returntype", Promise)
], DentistsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DentistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DentistsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dentist_dto_1.UpdateDentistDto]),
    __metadata("design:returntype", void 0)
], DentistsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DentistsController.prototype, "remove", null);
exports.DentistsController = DentistsController = __decorate([
    (0, common_1.Controller)('dentists'),
    __metadata("design:paramtypes", [dentists_service_1.DentistsService])
], DentistsController);
//# sourceMappingURL=dentists.controller.js.map