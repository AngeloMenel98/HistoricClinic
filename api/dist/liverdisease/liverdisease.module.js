"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiverDiseaseModule = void 0;
const common_1 = require("@nestjs/common");
const liverdisease_service_1 = require("./service/liverdisease.service");
const liverdisease_controller_1 = require("./controller/liverdisease.controller");
const typeorm_1 = require("@nestjs/typeorm");
const liverdisease_entity_1 = require("./entities/liverdisease.entity");
let LiverDiseaseModule = class LiverDiseaseModule {
};
exports.LiverDiseaseModule = LiverDiseaseModule;
exports.LiverDiseaseModule = LiverDiseaseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([liverdisease_entity_1.LiverDisease])],
        controllers: [liverdisease_controller_1.LiverDiseaseController],
        providers: [liverdisease_service_1.LiverDiseaseService],
    })
], LiverDiseaseModule);
//# sourceMappingURL=liverdisease.module.js.map