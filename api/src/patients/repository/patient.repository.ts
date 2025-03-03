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

      const savedPat = await manager.save(patient);

      if (patientDTO.bloodPressure) {
        const bloodPressure = this.bloodPressureRepo.create({
          ...patientDTO.bloodPressure,
          patient: savedPat,
        });

        await manager.save(bloodPressure);
      }
      if (patientDTO.medications?.length) {
        await Promise.all(
          patientDTO.medications.map(async (medDTO) => {
            let medication = await manager.findOne(Medication, {
              where: { name: medDTO.name },
            });
            if (!medication) {
              medication = this.medicationRepo.create({
                name: medDTO.name,
              });
              medication = await manager.save(medication);
            }
            const medPat = this.medPatRepo.create({
              patient: savedPat,
              medication: medication,
              dosage: medDTO.dosage,
              note: medDTO.note,
            });

            await manager.save(medPat);
          }),
        );
      }
      if (patientDTO.liverDiseases?.length) {
        await Promise.all(
          patientDTO.liverDiseases.map(async (ldDTO) => {
            let liverDisease = await manager.findOne(LiverDisease, {
              where: { name: ldDTO.name },
            });

            if (!liverDisease) {
              liverDisease = this.liverDiseaseRepo.create({
                ...ldDTO,
                patients: [savedPat],
              });
            } else {
              const alreadyAdded = liverDisease.patients?.some(
                (p) => p.id === savedPat.id,
              );
              if (!alreadyAdded) {
                liverDisease.patients = [
                  ...(liverDisease.patients || []),
                  savedPat,
                ];
              }
            }
            await manager.save(liverDisease);
          }),
        );
      }
      if (patientDTO.infectiousDiseases?.length) {
        await Promise.all(
          patientDTO.infectiousDiseases.map(async (infdDTO) => {
            let infectiousDisease = await manager.findOne(InfectiousDisease, {
              where: { name: infdDTO.name },
            });

            if (!infectiousDisease) {
              infectiousDisease = this.infectiousDiseaseRepo.create({
                ...infdDTO,
                patients: [savedPat],
              });
            } else {
              const alreadyAdded = infectiousDisease.patients?.some(
                (p) => p.id === savedPat.id,
              );
              if (!alreadyAdded) {
                infectiousDisease.patients = [
                  ...(infectiousDisease.patients || []),
                  savedPat,
                ];
              }
            }
            await manager.save(infectiousDisease);
          }),
        );
      }
      if (patientDTO.medicalConditions?.length) {
        await Promise.all(
          patientDTO.medicalConditions.map(async (medCDTO) => {
            let medicalCondition = await manager.findOne(MedicalCondition, {
              where: { name: medCDTO.name },
            });
            if (!medicalCondition) {
              medicalCondition = this.medicalConditionRepo.create({
                name: medCDTO.name,
              });
              medicalCondition = await manager.save(medicalCondition);
            }
            const patMed = this.patMedRepo.create({
              patient: savedPat,
              condition: medicalCondition,
              info: medCDTO.info,
            });

            await manager.save(patMed);
          }),
        );
      }
      if (patientDTO.addedInfo) {
        const addedInfo = this.addedInfoRepo.create({
          ...patientDTO.addedInfo,
          patient: savedPat,
        });

        await manager.save(addedInfo);
      }
      if (patientDTO.operations?.length) {
        await Promise.all(
          patientDTO.operations.map(async (opDTO) => {
            let operation = await manager.findOne(Operation, {
              where: { name: opDTO.name },
            });
            if (!operation) {
              operation = this.operationRepo.create({
                name: opDTO.name,
              });
              operation = await manager.save(operation);
            }
            const patMed = this.opPatRepo.create({
              patient: savedPat,
              operation: operation,
              date: opDTO.date,
            });

            await manager.save(patMed);
          }),
        );
      }
      if (patientDTO.smokingHistory) {
        const smokeHistory = this.smokingHistoryRepo.create({
          ...patientDTO.smokingHistory,
          patient: savedPat,
        });

        await manager.save(smokeHistory);
      }

      return savedPat;
    });
  }

  async findAll() {}
}
