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
exports.ProcedureRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const procedure_entity_1 = require("../entities/procedure.entity");
let ProcedureRepository = class ProcedureRepository extends typeorm_1.Repository {
    constructor(procedureRepository, dataSource) {
        super(procedureRepository.target, procedureRepository.manager);
        this.procedureRepository = procedureRepository;
        this.dataSource = dataSource;
    }
    async createProcedure(procedure) {
        return this.dataSource.manager.transaction(async (manager) => {
            return manager.save(procedure);
        });
    }
    async findByCode(code) {
        return this.createQueryBuilder('pro')
            .where('pro.codeProcedure = :code', {
            code,
        })
            .getOne();
    }
};
exports.ProcedureRepository = ProcedureRepository;
exports.ProcedureRepository = ProcedureRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(procedure_entity_1.Procedure)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], ProcedureRepository);
//# sourceMappingURL=procedure.repository.js.map