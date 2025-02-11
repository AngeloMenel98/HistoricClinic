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
exports.ConditionRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const medical_condition_entity_1 = require("../entities/medical-condition.entity");
let ConditionRepository = class ConditionRepository extends typeorm_1.Repository {
    constructor(conditionRepository, dataSource) {
        super(conditionRepository.target, conditionRepository.manager);
        this.conditionRepository = conditionRepository;
        this.dataSource = dataSource;
    }
    async createCondition(patient) {
        return this.dataSource.manager.transaction(async (manager) => {
            return manager.save(patient);
        });
    }
};
exports.ConditionRepository = ConditionRepository;
exports.ConditionRepository = ConditionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(medical_condition_entity_1.MedicalCondition)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], ConditionRepository);
//# sourceMappingURL=medical-conditions.repository.js.map