export interface ResAppointDTO {
  id: string;
  appointDate: Date;
  patientId: string;
  dentistId: string;
  notes?: string;
}
