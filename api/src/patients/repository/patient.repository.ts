import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from '../entities/patient.entity';

import { BloodPressureRepository } from 'src/blood-pressure/repository/blood-pressure.repository';
import { MedicationRepository } from 'src/medication/repository/medication.repository';
import { LiverRepository } from 'src/liverdisease/repository/liverdisease.repository';
import { InfDisRepository } from 'src/infectious-disease/repository/infectious-disease.repository';
import { ConditionRepository } from 'src/medical-conditions/repository/medical-conditions.repository';
import { SmokingRepository } from 'src/smokinghistory/repository/smokinghistory.repository';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { User } from 'src/users/entities/user.entity';
import { Medication } from 'src/medication/entities/medication.entity';
import { MedPatRepo } from 'src/medication-pat/repository/medication-pat.repository';
import { LiverDisease } from 'src/liverdisease/entities/liverdisease.entity';
import { OperationRepository } from 'src/operation/repository/operation.repository';
import { PatMedRepo } from 'src/pat-med/repository/pat-med.repository';
import { OpPatRepo } from 'src/op-pat/repository/op-pat.repository';
import { MedicalCondition } from 'src/medical-conditions/entities/medical-condition.entity';
import { InfectiousDisease } from 'src/infectious-disease/entities/infectious-disease.entity';
import { PatientAddRepo } from 'src/patient-add-info/repository/patient-add-info.repository';
import { Operation } from 'src/operation/entities/operation.entity';

@Injectable()
export class PatientRepository extends Repository<Patient> {
  constructor(
    @InjectRepository(Patient) private patientRepository: Repository<Patient>,

    private readonly bloodPressureRepo: BloodPressureRepository,
    private readonly medicationRepo: MedicationRepository,
    private readonly liverDiseaseRepo: LiverRepository,
    private readonly infectiousDiseaseRepo: InfDisRepository,
    private readonly medicalConditionRepo: ConditionRepository,
    private readonly operationRepo: OperationRepository,
    private readonly smokingHistoryRepo: SmokingRepository,
    private readonly addedInfoRepo: PatientAddRepo,

    private readonly medPatRepo: MedPatRepo,
    private readonly patMedRepo: PatMedRepo,
    private readonly opPatRepo: OpPatRepo,

    private dataSource: DataSource,
  ) {
    super(patientRepository.target, patientRepository.manager);
  }

  async createPatient(patientDTO: CreatePatientDto, user: User) {
    return this.dataSource.manager.transaction(async (manager) => {
      const patient = this.patientRepository.create({
        name: patientDTO.name,
        lastName: patientDTO.lastName,
        dni: patientDTO.dni,
        cuit: patientDTO.cuit,
        birthDate: patientDTO.birthDate,
        occupation: patientDTO.occupation,
        address: patientDTO.address,
        phoneNumber: patientDTO.phoneNumber,
        email: patientDTO.email,
        user: user,
      });

      return manager.save(patient);
    });
  }

  async findAll() {}
}
