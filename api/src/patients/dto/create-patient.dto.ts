import { Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';
import { PressureLevel } from 'src/enum/blood-pressure.enum';
import { SmokingStatus } from 'src/enum/smoking-status.enum';

// export class SmokingHistoryDTO {
//   status: SmokingStatus;

//   @IsOptional()
//   @IsDate()
//   @Type(() => Date)
//   startDate?: Date;

//   @IsOptional()
//   @IsDate()
//   @Type(() => Date)
//   endDate?: Date;
// }

// export class OperationDTO {
//   name: string;
//   date: Date;
// }

// export class AddedInfoDTO {
//   hasBreathingProblems: boolean;
//   isPregnant: boolean;
// }

// export class MedicalCondDTO {
//   name: string;
//   info?: string;
// }

// export class InfectiousDiseaseDTO {
//   name: string;
// }

// export class LiverDiseaseDTO {
//   name: string;
// }

// export class MedicationDTO {
//   name: string;
//   note?: string;
//   dosage?: string;
// }

// export class BloodPressureDTO {
//   level: PressureLevel;
//   number: number;
// }

export class CreatePatientDto {
  name: string;
  lastName: string;
  dni: string;
  cuit?: string;

  @IsDate()
  @Type(() => Date)
  birthDate: Date;

  occupation: string;
  address: string;
  phoneNumber: string;
  email: string;
}
