import { Patient } from 'src/patients/entities/patient.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('infectiousDisease')
export class InfectiousDisease {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ManyToMany(() => Patient, (patient) => patient.infDiseases)
  @JoinTable({ name: 'infdis_pat' })
  patients: Patient[];
}
