"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalConditionsModule = void 0;
const common_1 = require("@nestjs/common");
const medical_conditions_service_1 = require("./service/medical-conditions.service");
const medical_conditions_controller_1 = require("./controller/medical-conditions.controller");
const typeorm_1 = require("@nestjs/typeorm");
const medical_condition_entity_1 = require("./entities/medical-condition.entity");
const medical_conditions_repository_1 = require("./repository/medical-conditions.repository");
let MedicalConditionsModule = class MedicalConditionsModule {
};
exports.MedicalConditionsModule = MedicalConditionsModule;
exports.MedicalConditionsModule = MedicalConditionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([medical_condition_entity_1.MedicalCondition])],
        controllers: [medical_conditions_controller_1.MedicalConditionsController],
        providers: [medical_conditions_service_1.MedicalConditionsService, medical_conditions_repository_1.ConditionRepository],
    })
], MedicalConditionsModule);
//# sourceMappingURL=medical-conditions.module.js.map