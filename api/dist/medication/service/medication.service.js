"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicationService = void 0;
const common_1 = require("@nestjs/common");
let MedicationService = class MedicationService {
    create(createMedicationDto) {
        return 'This action adds a new medication';
    }
    findAll() {
        return `This action returns all medication`;
    }
    findOne(id) {
        return `This action returns a #${id} medication`;
    }
    update(id, updateMedicationDto) {
        return `This action updates a #${id} medication`;
    }
    remove(id) {
        return `This action removes a #${id} medication`;
    }
};
exports.MedicationService = MedicationService;
exports.MedicationService = MedicationService = __decorate([
    (0, common_1.Injectable)()
], MedicationService);
//# sourceMappingURL=medication.service.js.map