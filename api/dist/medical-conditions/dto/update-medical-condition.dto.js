"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicalConditionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_medical_condition_dto_1 = require("./create-medical-condition.dto");
class UpdateMedicalConditionDto extends (0, mapped_types_1.PartialType)(create_medical_condition_dto_1.CreateMedicalConditionDto) {
}
exports.UpdateMedicalConditionDto = UpdateMedicalConditionDto;
//# sourceMappingURL=update-medical-condition.dto.js.map