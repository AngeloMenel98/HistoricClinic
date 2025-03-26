import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class ResPatientDTO {
  id: string;
  name: string;
  lastName: string;
  dni?: string;
  cuit?: string;
  birthDate?: Date;
  occupation?: string;
  phoneNumber?: string;
  email?: string;
  createdAt: Date;
}
