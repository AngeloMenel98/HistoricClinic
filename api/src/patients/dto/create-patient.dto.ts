import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PressureLevel } from 'src/enum/blood-pressure.enum';
import { SmokingStatus } from 'src/enum/smoking-status.enum';

export class SmokingHistoryDTO {
  @IsEnum(SmokingStatus)
  @IsNotEmpty()
  status: SmokingStatus;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  startDate?: Date;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  endDate?: Date;
}

export class OperationDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Date)
  @IsDate()
  date: Date;
}

export class AddedInfoDTO {
  @IsBoolean()
  @IsNotEmpty()
  hasBreathingProblems: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isPregnant: boolean;
}

export class MedicalCondDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  info?: string;
}

export class InfectiousDiseaseDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class LiverDiseaseDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class MedicationDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  note?: string;

  @IsString()
  @IsOptional()
  dosage?: string;
}

export class BloodPressureDTO {
  @IsEnum(PressureLevel)
  @IsNotEmpty()
  level: PressureLevel;

  @IsInt()
  @IsNotEmpty()
  number: number;
}

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

  @IsOptional()
  @ValidateNested()
  @Type(() => BloodPressureDTO)
  bloodPressure?: BloodPressureDTO;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationDTO)
  medications?: MedicationDTO[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LiverDiseaseDTO)
  liverDiseases?: LiverDiseaseDTO[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InfectiousDiseaseDTO)
  infectiousDiseases?: InfectiousDiseaseDTO[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicalCondDTO)
  medicalConditions?: MedicalCondDTO[];

  @IsOptional()
  @ValidateNested()
  @Type(() => AddedInfoDTO)
  addedInfo?: AddedInfoDTO;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationDTO)
  operations?: OperationDTO[];

  @IsOptional()
  @ValidateNested()
  @Type(() => SmokingHistoryDTO)
  smokingHistory: SmokingHistoryDTO;
}
