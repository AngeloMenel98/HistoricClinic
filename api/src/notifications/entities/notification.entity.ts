import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dentistId: string;

  @Column()
  appointmentId: string;

  @Column({ type: 'timestamp' })
  sentAt: Date;

  @Column({ default: false })
  isRead: boolean;

  @Column({ type: 'json' })
  content: {
    message: string;
    patientName?: string;
    procedureType?: string;
  };
}
