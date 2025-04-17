export interface ResAppointDTO {
  id: string;
  date: Date;
  patientName: string;
  patientLastName: string;
  notes?: string;
  codeProcedure?: string;
}
