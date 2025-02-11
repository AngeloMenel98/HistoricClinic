"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicationPatDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_medication_pat_dto_1 = require("./create-medication-pat.dto");
class UpdateMedicationPatDto extends (0, mapped_types_1.PartialType)(create_medication_pat_dto_1.CreateMedicationPatDto) {
}
exports.UpdateMedicationPatDto = UpdateMedicationPatDto;
//# sourceMappingURL=update-medication-pat.dto.js.map