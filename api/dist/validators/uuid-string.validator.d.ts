import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class IsUUIDOrString implements ValidatorConstraintInterface {
    validate(value: any, args?: ValidationArguments): Promise<boolean> | boolean;
    defaultMessage(args: ValidationArguments): string;
}
