"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DentistsModule = void 0;
const common_1 = require("@nestjs/common");
const dentists_service_1 = require("./service/dentists.service");
const dentists_controller_1 = require("./controller/dentists.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dentist_entity_1 = require("./entities/dentist.entity");
const dentist_repository_1 = require("./repository/dentist.repository");
const users_module_1 = require("../users/users.module");
let DentistsModule = class DentistsModule {
};
exports.DentistsModule = DentistsModule;
exports.DentistsModule = DentistsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dentist_entity_1.Dentist]), users_module_1.UsersModule],
        controllers: [dentists_controller_1.DentistsController],
        providers: [dentists_service_1.DentistsService, dentist_repository_1.DentistRepository],
        exports: [dentists_service_1.DentistsService],
    })
], DentistsModule);
//# sourceMappingURL=dentists.module.js.map