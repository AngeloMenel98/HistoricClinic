import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateDentistDto {
  @IsString()
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'lastName should not be empty' })
  lastName: string;

  @IsString()
  @IsNotEmpty({ message: 'ProfessionalId should not be empty' })
  professionalId: string;

  @IsPhoneNumber('AR')
  @IsNotEmpty({ message: 'Phone Number should not be empty' })
  phoneNumber: string;
}
