export interface ResAppointDTO {
    id: string;
    scheduledAt: Date;
    patientId: string;
    dentistId: string;
    notes?: string;
    codeProcedure?: string;
}
