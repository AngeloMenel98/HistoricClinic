import { Operation } from 'src/operation/entities/operation.entity';
import { Patient } from 'src/patients/entities/patient.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('op_pat')
export class OpPat {
  @PrimaryColumn()
  operationId: string;

  @PrimaryColumn()
  patientId: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => Operation, (operation) => operation.opPats)
  operation: Operation;

  @ManyToOne(() => Patient, (patient) => patient.opPats)
  patient: Patient;
}
