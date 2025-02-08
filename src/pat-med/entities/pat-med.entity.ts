import { MedicalCondition } from 'src/medical-conditions/entities/medical-condition.entity';
import { Patient } from 'src/patients/entities/patient.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('pat_med')
export class PatMed {
  @PrimaryColumn()
  conditionId: string;

  @PrimaryColumn()
  patientId: string;

  @Column({ type: 'text' })
  info: string;

  @ManyToOne(() => MedicalCondition, (med) => med.patMeds)
  condition: MedicalCondition;

  @ManyToOne(() => Patient, (patient) => patient.patMeds)
  patient: Patient;
}
