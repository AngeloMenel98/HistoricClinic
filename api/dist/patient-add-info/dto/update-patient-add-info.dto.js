"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatientAddInfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_patient_add_info_dto_1 = require("./create-patient-add-info.dto");
class UpdatePatientAddInfoDto extends (0, mapped_types_1.PartialType)(create_patient_add_info_dto_1.CreatePatientAddInfoDto) {
}
exports.UpdatePatientAddInfoDto = UpdatePatientAddInfoDto;
//# sourceMappingURL=update-patient-add-info.dto.js.map