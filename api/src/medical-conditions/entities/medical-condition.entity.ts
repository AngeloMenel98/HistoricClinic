import { MedicationPat } from 'src/medication-pat/entities/medication-pat.entity';
import { PatMed } from 'src/pat-med/entities/pat-med.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('medical_conditions')
export class MedicalCondition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => PatMed, (patmed) => patmed.condition)
  patMeds: PatMed[];
}
