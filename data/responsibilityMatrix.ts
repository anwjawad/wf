import { ResponsibilityMatrix } from '../types';

export const responsibilityMatrix: ResponsibilityMatrix[] = [
  {
    role: 'Medical Secretary',
    informsPatient: ['Clinic Appointments', 'Simulation Appointments (post-list)'],
    booksAppointments: ['Initial Clinic'],
    followsReferral: false,
    requestsPermit: false,
    coordinatesWithOPC: false,
    coordinatesInpatient: true,
    documentationResponsibility: 'Registers initial visit and basic demographics'
  },
  {
    role: 'General Oncology Coordinator',
    informsPatient: ['General Follow-ups', 'Missing Referral Status'],
    booksAppointments: ['Clinic Follow-ups', 'Investigations', 'Chemo/OPC'],
    followsReferral: true,
    requestsPermit: true,
    coordinatesWithOPC: true,
    coordinatesInpatient: false,
    documentationResponsibility: 'Maintains general coordination log'
  },
  {
    role: 'Radiotherapy Coordinator',
    informsPatient: ['CT', 'PET', 'RT Clinic', 'Pre-simulation steps'],
    booksAppointments: ['CT', 'PET', 'Concomitant Chemo'],
    followsReferral: true,
    requestsPermit: true,
    coordinatesWithOPC: true,
    coordinatesInpatient: false,
    documentationResponsibility: 'Maintains presimulation list and RT booking logs'
  },
  {
    role: 'Breast Cancer Coordinator',
    informsPatient: ['CT', 'US', 'PET', 'Permit updates', 'Referral updates', 'Breast pathway appointments'],
    booksAppointments: ['CT', 'US', 'PET', 'Surgery consults'],
    followsReferral: true,
    requestsPermit: true,
    coordinatesWithOPC: true,
    coordinatesInpatient: false,
    documentationResponsibility: 'Fills initial MDT patient data form and tracks pathway milestones'
  },
  {
    role: 'Inpatient Oncology Coordinator',
    informsPatient: ['Ward Staff', 'Admitted Patients'],
    booksAppointments: [],
    followsReferral: false,
    requestsPermit: false,
    coordinatesWithOPC: true,
    coordinatesInpatient: true,
    documentationResponsibility: 'Logs transport and internal transfer requirements'
  },
  {
    role: 'Chemotherapy / OPC',
    informsPatient: ['Chemo Booking Confirmations'],
    booksAppointments: ['Chemo Sessions'],
    followsReferral: false,
    requestsPermit: false,
    coordinatesWithOPC: true,
    coordinatesInpatient: true,
    documentationResponsibility: 'Treatment scheduling and administration logs'
  },
  {
    role: 'Permit Department',
    informsPatient: ['Permit Approvals', 'Permit Rejection Reasons'],
    booksAppointments: [],
    followsReferral: false,
    requestsPermit: true,
    coordinatesWithOPC: false,
    coordinatesInpatient: false,
    documentationResponsibility: 'Official permit records and financial clearance'
  }
];
