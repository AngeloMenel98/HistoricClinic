"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodPressureModule = void 0;
const common_1 = require("@nestjs/common");
const blood_pressure_service_1 = require("./service/blood-pressure.service");
const blood_pressure_controller_1 = require("./controller/blood-pressure.controller");
const typeorm_1 = require("@nestjs/typeorm");
const blood_pressure_entity_1 = require("./entities/blood-pressure.entity");
const blood_pressure_repository_1 = require("./repository/blood-pressure.repository");
let BloodPressureModule = class BloodPressureModule {
};
exports.BloodPressureModule = BloodPressureModule;
exports.BloodPressureModule = BloodPressureModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([blood_pressure_entity_1.BloodPressure])],
        controllers: [blood_pressure_controller_1.BloodPressureController],
        providers: [blood_pressure_service_1.BloodPressureService, blood_pressure_repository_1.BloodPressureRepository],
    })
], BloodPressureModule);
//# sourceMappingURL=blood-pressure.module.js.map