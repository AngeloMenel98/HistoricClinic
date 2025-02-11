import { Appointment } from 'src/appointments/entities/appointment.entity';
import { BloodPressure } from 'src/blood-pressure/entities/blood-pressure.entity';
import { InfectiousDisease } from 'src/infectious-disease/entities/infectious-disease.entity';
import { LiverDisease } from 'src/liverdisease/entities/liverdisease.entity';
import { MedicationPat } from 'src/medication-pat/entities/medication-pat.entity';
import { OpPat } from 'src/op-pat/entities/op-pat.entity';
import { PatMed } from 'src/pat-med/entities/pat-med.entity';
import { PatientAddInfo } from 'src/patient-add-info/entities/patient-add-info.entity';
import { SmokingHistory } from 'src/smokinghistory/entities/smokinghistory.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 25 })
  name: string;

  @Column({ type: 'varchar', length: 25 })
  lastName: string;

  @Column({ type: 'varchar', length: 10 })
  dni: string;

  @Column({ type: 'timestamp' })
  birthDate: Date;

  @Column({ type: 'varchar', length: 25 })
  occupation: string;

  @Column({ type: 'varchar', length: 50 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  cuit: string;

  @Column({ type: 'varchar' })
  address: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.patients)
  user: User;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];

  @OneToOne(() => BloodPressure, (bloodPressure) => bloodPressure.patient)
  bloodPressure: BloodPressure;

  @ManyToMany(() => InfectiousDisease, (infdis) => infdis.patients)
  infDiseases: InfectiousDisease[];

  @ManyToMany(() => LiverDisease, (liver) => liver.patients)
  liverDiseases: LiverDisease[];

  @OneToMany(() => PatMed, (patMed) => patMed.patient)
  patMeds: Appointment[];

  @OneToMany(() => MedicationPat, (medPat) => medPat.patient)
  medPats: MedicationPat[];

  @OneToMany(() => OpPat, (opPat) => opPat.patient)
  opPats: OpPat[];

  @OneToOne(() => PatientAddInfo, (addInfo) => addInfo.patient)
  addedInfo: PatientAddInfo;

  @OneToOne(() => SmokingHistory, (smoke) => smoke.patient)
  smoke: SmokingHistory;
}
