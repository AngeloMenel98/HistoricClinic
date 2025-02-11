import { Patient } from 'src/patients/entities/patient.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('liver_diseases')
export class LiverDisease {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ManyToMany(() => Patient, (patient) => patient.liverDiseases)
  @JoinTable({ name: 'liv_pat' })
  patients: Patient[];
}
