import { Dentist } from 'src/dentists/entities/dentist.entity';
import { Diagnosis } from 'src/diagnoses/entities/diagnosis.entity';
import { Patient } from 'src/patients/entities/patient.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp' })
  appointmentDate: Date;

  @Column({ type: 'varchar' })
  notes: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  patient: Patient;

  @ManyToOne(() => Dentist, (dentist) => dentist.appointments)
  dentist: Dentist;

  @OneToOne(() => Diagnosis, (diagnosis) => diagnosis.appointment)
  @JoinColumn({ name: 'diagnosisId' })
  diagnosis: Diagnosis;

  @ManyToOne(() => Procedure, (procedure) => procedure.appointments)
  procedure: Procedure;
}
