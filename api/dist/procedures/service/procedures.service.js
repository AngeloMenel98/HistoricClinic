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
exports.ProceduresService = void 0;
const common_1 = require("@nestjs/common");
const procedure_repository_1 = require("../repository/procedure.repository");
const procedure_entity_1 = require("../entities/procedure.entity");
let ProceduresService = class ProceduresService {
    constructor(procedureRepo) {
        this.procedureRepo = procedureRepo;
    }
    create(procedureDTO) {
        const procedure = new procedure_entity_1.Procedure();
        procedure.codeProcedure = procedureDTO.code;
        procedure.name = procedureDTO.name;
        return this.procedureRepo.createProcedure(procedure);
    }
    findAll() {
        return `This action returns all procedures`;
    }
    async findById(id) {
        const procedure = await this.procedureRepo.findOneBy({ id });
        if (!procedure) {
            throw new common_1.NotFoundException(`Procedure with Id #${id} not Found`);
        }
        return procedure;
    }
    async findByCodeOrCreate(code) {
        const procedure = await this.procedureRepo.findByCode(code);
        if (!procedure) {
            const dto = { code };
            return this.create(dto);
        }
        return procedure;
    }
    update(id, updateProcedureDto) {
        return `This action updates a #${id} procedure`;
    }
    remove(id) {
        return `This action removes a #${id} procedure`;
    }
};
exports.ProceduresService = ProceduresService;
exports.ProceduresService = ProceduresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [procedure_repository_1.ProcedureRepository])
], ProceduresService);
//# sourceMappingURL=procedures.service.js.map