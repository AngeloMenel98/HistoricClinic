"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const dentists_module_1 = require("./dentists/dentists.module");
const diagnoses_module_1 = require("./diagnoses/diagnoses.module");
const procedures_module_1 = require("./procedures/procedures.module");
const patients_module_1 = require("./patients/patients.module");
const database_module_1 = require("./database/database.module");
const appointments_module_1 = require("./appointments/appointments.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const smokinghistory_module_1 = require("./smokinghistory/smokinghistory.module");
const patient_add_info_module_1 = require("./patient-add-info/patient-add-info.module");
const liverdisease_module_1 = require("./liverdisease/liverdisease.module");
const blood_pressure_module_1 = require("./blood-pressure/blood-pressure.module");
const infectious_disease_module_1 = require("./infectious-disease/infectious-disease.module");
const op_pat_module_1 = require("./op-pat/op-pat.module");
const operation_module_1 = require("./operation/operation.module");
const pat_med_module_1 = require("./pat-med/pat-med.module");
const medical_conditions_module_1 = require("./medical-conditions/medical-conditions.module");
const medication_pat_module_1 = require("./medication-pat/medication-pat.module");
const medication_module_1 = require("./medication/medication.module");
const notifications_module_1 = require("./notifications/notifications.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: 'src/.env',
            }),
            auth_module_1.AuthModule,
            appointments_module_1.AppointmentsModule,
            blood_pressure_module_1.BloodPressureModule,
            database_module_1.DataBaseModule,
            dentists_module_1.DentistsModule,
            diagnoses_module_1.DiagnosesModule,
            infectious_disease_module_1.InfectiousDiseaseModule,
            liverdisease_module_1.LiverDiseaseModule,
            medical_conditions_module_1.MedicalConditionsModule,
            medication_pat_module_1.MedicationPatModule,
            medication_module_1.MedicationModule,
            notifications_module_1.NotificationsModule,
            op_pat_module_1.OpPatModule,
            operation_module_1.OperationModule,
            patients_module_1.PatientsModule,
            patient_add_info_module_1.PatientAddInfoModule,
            pat_med_module_1.PatMedModule,
            procedures_module_1.ProceduresModule,
            smokinghistory_module_1.SmokingHistoryModule,
            users_module_1.UsersModule,
            notifications_module_1.NotificationsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map