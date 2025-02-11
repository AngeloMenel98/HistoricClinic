"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmokinghistoryService = void 0;
const common_1 = require("@nestjs/common");
let SmokinghistoryService = class SmokinghistoryService {
    create(createSmokinghistoryDto) {
        return 'This action adds a new smokinghistory';
    }
    findAll() {
        return `This action returns all smokinghistory`;
    }
    findOne(id) {
        return `This action returns a #${id} smokinghistory`;
    }
    update(id, updateSmokinghistoryDto) {
        return `This action updates a #${id} smokinghistory`;
    }
    remove(id) {
        return `This action removes a #${id} smokinghistory`;
    }
};
exports.SmokinghistoryService = SmokinghistoryService;
exports.SmokinghistoryService = SmokinghistoryService = __decorate([
    (0, common_1.Injectable)()
], SmokinghistoryService);
//# sourceMappingURL=smokinghistory.service.js.map