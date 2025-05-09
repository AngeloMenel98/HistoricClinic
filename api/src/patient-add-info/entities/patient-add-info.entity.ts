import { Patient } from 'src/patients/entities/patient.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pat_added_info')
export class PatientAddInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: false })
  hasBreathingProblems: boolean;

  @Column({ type: 'boolean', default: false })
  isPregnant: boolean;

  @OneToOne(() => Patient, (patient) => patient.addedInfo)
  @JoinColumn({ name: 'patientId' })
  patient: Patient;
}
