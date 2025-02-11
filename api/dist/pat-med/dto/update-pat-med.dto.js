"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatMedDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pat_med_dto_1 = require("./create-pat-med.dto");
class UpdatePatMedDto extends (0, mapped_types_1.PartialType)(create_pat_med_dto_1.CreatePatMedDto) {
}
exports.UpdatePatMedDto = UpdatePatMedDto;
//# sourceMappingURL=update-pat-med.dto.js.map