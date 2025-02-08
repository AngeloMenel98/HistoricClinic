import { OpPat } from 'src/op-pat/entities/op-pat.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operations')
export class Operation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @OneToMany(() => OpPat, (opPat) => opPat.operation)
  opPats: OpPat[];
}
