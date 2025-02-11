"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDentistDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dentist_dto_1 = require("./create-dentist.dto");
class UpdateDentistDto extends (0, mapped_types_1.PartialType)(create_dentist_dto_1.CreateDentistDto) {
}
exports.UpdateDentistDto = UpdateDentistDto;
//# sourceMappingURL=update-dentist.dto.js.map