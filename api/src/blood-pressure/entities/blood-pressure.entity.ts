import { PressureLevel } from 'src/enum/blood-pressure.enum';
import { Patient } from 'src/patients/entities/patient.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('blood_pressures')
export class BloodPressure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: PressureLevel })
  level: PressureLevel;

  @Column({ type: 'integer' })
  number: number;

  @OneToOne(() => Patient, (patient) => patient.bloodPressure)
  @JoinColumn({ name: 'patientId' })
  patient: Patient;
}
