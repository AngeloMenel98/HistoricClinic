import { MedicationPat } from 'src/medication-pat/entities/medication-pat.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('medications')
export class Medication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @OneToMany(() => MedicationPat, (medPat) => medPat.medication)
  medPats: MedicationPat[];
}
