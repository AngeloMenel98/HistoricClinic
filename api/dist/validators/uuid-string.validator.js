"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUUIDOrString = void 0;
const class_validator_1 = require("class-validator");
let IsUUIDOrString = class IsUUIDOrString {
    validate(value, args) {
        const fieldName = args.constraints[0];
        if (typeof value == 'string') {
            if ((0, class_validator_1.isUUID)(value)) {
                return true;
            }
            args.object[`new${fieldName}`] = value;
            return true;
        }
        return false;
    }
    defaultMessage(args) {
        return 'Must be either a valid UUID or a string';
    }
};
exports.IsUUIDOrString = IsUUIDOrString;
exports.IsUUIDOrString = IsUUIDOrString = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsUUIDOrString);
//# sourceMappingURL=uuid-string.validator.js.map