import { Role } from '../types';

export const roles: Role[] = [
  {
    id: 'r1',
    name: 'Medical Secretary',
    department: 'Outpatient Clinics',
    description: 'Initial contact point for outpatients. Manages clinic appointments and initial referral checks.',
    responsibilities: [
      'Give clinic appointment to patients',
      'Check referral availability',
      'Inform patients of Simulation appointments (after receiving list)',
      'Coordinate inpatient communication through Inpatient Oncology Coordinator'
    ],
    relatedPathways: ['Master', 'General', 'Radiotherapy', 'Breast Cancer'],
    contactPoints: ['Outpatient Clinic Desk', 'Phone'],
    color: 'medical-blue'
  },
  {
    id: 'r2',
    name: 'General Oncology Coordinator',
    department: 'Oncology Coordination',
    description: 'Handles general oncology patient pathways and overall coordination of care.',
    responsibilities: [
      'Follow up on missing referrals',
      'Arrange clinic appointments and investigations',
      'Request permits if needed',
      'Arrange chemotherapy/OPC appointments'
    ],
    relatedPathways: ['General', 'Master'],
    contactPoints: ['Oncology Coordinator Office', 'Phone'],
    color: 'medical-blue'
  },
  {
    id: 'r3',
    name: 'Radiotherapy Coordinator',
    department: 'Radiation Oncology',
    description: 'Specialized coordinator for patients requiring radiation therapy.',
    responsibilities: [
      'Review radiotherapy referrals',
      'Arrange CT, PET and clinic appointments',
      'Manage Presimulation meeting lists',
      'Book concomitant chemotherapy if needed'
    ],
    relatedPathways: ['Radiotherapy', 'Master'],
    contactPoints: ['Radiotherapy Dept', 'Email', 'Phone'],
    color: 'medical-teal'
  },
  {
    id: 'r4',
    name: 'Breast Cancer Coordinator',
    department: 'Breast MDT',
    description: 'Dedicated coordinator for breast cancer patients coming from MDT or clinics.',
    responsibilities: [
      'Fill patient data from MDT',
      'Arrange CT, US, PET',
      'Follow up on referrals and permits',
      'Inform patient whenever any appointment or permit is ready'
    ],
    relatedPathways: ['Breast Cancer', 'Master'],
    contactPoints: ['Breast Clinic', 'Phone'],
    color: 'medical-purple'
  },
  {
    id: 'r5',
    name: 'Inpatient Oncology Coordinator',
    department: 'Inpatient Ward',
    description: 'Coordinates care and appointments for admitted patients.',
    responsibilities: [
      'Inform inpatient/ward of appointments',
      'Support internal coordination',
      'Support transport coordination'
    ],
    relatedPathways: ['Inpatient', 'Master', 'Radiotherapy'],
    contactPoints: ['Oncology Ward'],
    color: 'medical-blue'
  },
  {
    id: 'r6',
    name: 'Chemotherapy / OPC',
    department: 'Outpatient Chemotherapy',
    description: 'Manages the booking and delivery of systemic treatments.',
    responsibilities: [
      'Confirm chemotherapy booking',
      'Provide chemotherapy/OPC services',
      'Support appointment coordination'
    ],
    relatedPathways: ['Chemotherapy', 'Master', 'General', 'Radiotherapy'],
    contactPoints: ['OPC Desk'],
    color: 'medical-orange'
  },
  {
    id: 'r7',
    name: 'Permit Department',
    department: 'Administration',
    description: 'Handles the requests, approvals, and rejections of financial/treatment permits.',
    responsibilities: [
      'Process permit requests',
      'Communicate approval or rejection status',
      'Contact patient to explain rejection reasons'
    ],
    relatedPathways: ['Permit', 'Master', 'General', 'Radiotherapy', 'Breast Cancer'],
    contactPoints: ['Permit Office', 'App Notification'],
    color: 'medical-green'
  }
];
