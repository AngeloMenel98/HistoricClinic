export interface Appointment {
  id: string;
  date: Date;
  patientName: string;
  patientLastName: string;
  notes?: string;
  codeProcedure: string;
}

export interface CreateAppoint {
  scheduledAt: Date;
  code: string;
  patientId: string;
  dentistId: string;
}
