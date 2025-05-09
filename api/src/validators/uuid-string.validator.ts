import {
  isUUID,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsUUIDOrString implements ValidatorConstraintInterface {
  validate(value: any, args?: ValidationArguments): Promise<boolean> | boolean {
    const fieldName = args.constraints[0];
    if (typeof value == 'string') {
      if (isUUID(value)) {
        return true;
      }

      args.object[`new${fieldName}`] = value;
      return true;
    }
    return false;
  }

  defaultMessage(args: ValidationArguments): string {
    return 'Must be either a valid UUID or a string';
  }
}
