"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProceduresModule = void 0;
const common_1 = require("@nestjs/common");
const procedures_service_1 = require("./service/procedures.service");
const procedures_controller_1 = require("./controller/procedures.controller");
const procedure_repository_1 = require("./repository/procedure.repository");
const typeorm_1 = require("@nestjs/typeorm");
const procedure_entity_1 = require("./entities/procedure.entity");
let ProceduresModule = class ProceduresModule {
};
exports.ProceduresModule = ProceduresModule;
exports.ProceduresModule = ProceduresModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([procedure_entity_1.Procedure])],
        controllers: [procedures_controller_1.ProceduresController],
        providers: [procedures_service_1.ProceduresService, procedure_repository_1.ProcedureRepository],
        exports: [procedures_service_1.ProceduresService],
    })
], ProceduresModule);
//# sourceMappingURL=procedures.module.js.map