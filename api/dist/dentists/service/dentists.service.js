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
exports.DentistsService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/service/users.service");
const dentist_repository_1 = require("../repository/dentist.repository");
const dentist_entity_1 = require("../entities/dentist.entity");
let DentistsService = class DentistsService {
    constructor(dentistRepo, userService) {
        this.dentistRepo = dentistRepo;
        this.userService = userService;
    }
    async create(dentistDTO, userId) {
        const user = await this.userService.findOne(userId);
        await this.findByProfessionalId(dentistDTO.professionalId);
        const dentist = new dentist_entity_1.Dentist();
        dentist.name = dentistDTO.name;
        dentist.lastName = dentistDTO.lastName;
        dentist.professionalId = dentistDTO.professionalId;
        dentist.phoneNumber = dentistDTO.phoneNumber;
        dentist.user = user;
        return this.dentistRepo.createDentist(dentist);
    }
    findAll() {
        return `This action returns all dentists`;
    }
    async findOne(id) {
        const dentist = await this.dentistRepo.findOneBy({ id });
        if (!dentist) {
            throw new common_1.NotFoundException(`Dentist with id ${id} not found`);
        }
        return dentist;
    }
    async findByProfessionalId(professionalId) {
        const dentist = await this.dentistRepo.findOneBy({ professionalId });
        if (dentist) {
            throw new common_1.ConflictException(`Dentist with Professional Id #${professionalId} already exist`);
        }
        return dentist;
    }
    update(id, updateDentistDto) {
        return `This action updates a #${id} dentist`;
    }
    remove(id) {
        return `This action removes a #${id} dentist`;
    }
};
exports.DentistsService = DentistsService;
exports.DentistsService = DentistsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dentist_repository_1.DentistRepository,
        users_service_1.UsersService])
], DentistsService);
//# sourceMappingURL=dentists.service.js.map