import { Appointment } from 'src/appointments/entities/appointment.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('dentists')
export class Dentist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 30 })
  lasName: string;

  @Column({ type: 'varchar', length: 50 })
  professionalId: string;

  @Column({ type: 'varchar', length: 50 })
  phoneNumber: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.dentists)
  user: User;

  @OneToMany(() => Appointment, (appointment) => appointment.dentist)
  appointments: Appointment[];
}
