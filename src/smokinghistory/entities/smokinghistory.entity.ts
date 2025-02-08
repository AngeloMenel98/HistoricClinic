import { SmokingStatus } from 'src/enum/smoking-status.enum';
import { Patient } from 'src/patients/entities/patient.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('smoking_history')
export class SmokingHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: SmokingStatus })
  status: SmokingStatus;

  @Column({ type: 'timestamp', nullable: true })
  startDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  endDate: Date;

  @OneToOne(() => Patient, (patient) => patient.smoke)
  @JoinColumn({ name: 'patientId' })
  patient: Patient;
}
