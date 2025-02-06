import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Last Name should not be empty' })
  lastName: string;

  @IsString()
  @IsNotEmpty({ message: 'DNI should not be empty' })
  dni: string;

  @IsString()
  @IsNotEmpty({ message: 'CUIT should not be empty' })
  cuit: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty({ message: 'Birth Date should not be empty' })
  birthDate: Date;

  @IsString()
  @IsNotEmpty({ message: 'Occupation should not be empty' })
  occupation: string;

  @IsString()
  @IsNotEmpty({ message: 'Address should not be empty' })
  address: string;

  @IsPhoneNumber('AR')
  @IsNotEmpty({ message: 'Phone Number should not be empty' })
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;
}
