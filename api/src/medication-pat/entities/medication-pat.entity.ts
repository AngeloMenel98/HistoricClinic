import { Medication } from 'src/medication/entities/medication.entity';
import { Patient } from 'src/patients/entities/patient.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('medication_pat')
export class MedicationPat {
  @PrimaryColumn()
  patientId: string;

  @PrimaryColumn()
  medicationId: string;

  @Column({ type: 'varchar' })
  dosage: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @ManyToOne(() => Medication, (medication) => medication.medPats)
  medication: Medication;

  @ManyToOne(() => Patient, (patient) => patient.medPats)
  patient: Patient;
}
