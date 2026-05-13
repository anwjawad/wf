export type RoleType = 
  | 'Medical Secretary'
  | 'General Oncology Coordinator'
  | 'Radiotherapy Coordinator'
  | 'Breast Cancer Coordinator'
  | 'Inpatient Oncology Coordinator'
  | 'Chemotherapy / OPC'
  | 'Permit Department'
  | 'Patient'
  | 'Physician'
  | 'MDT';

export interface Role {
  id: string;
  name: RoleType;
  department: string;
  description: string;
  responsibilities: string[];
  relatedPathways: string[];
  contactPoints: string[];
  color: string;
}

export type NodeType = 'start' | 'action' | 'decision' | 'notification' | 'permit' | 'appointment' | 'referral' | 'treatment' | 'end';

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  responsibleRole: RoleType | RoleType[];
  department: string;
  type: NodeType;
  nextSteps?: string[];
  yesStep?: string;
  noStep?: string;
  statusTags?: string[];
  requiredDocuments?: string[];
  notes?: string;
}

export interface Workflow {
  id: string;
  title: string;
  subtitle: string;
  patientType: 'Outpatient' | 'Inpatient' | 'Both';
  coordinatorRole: RoleType;
  description: string;
  steps: WorkflowStep[];
  decisionPoints: number;
  relatedRoles: RoleType[];
  color: string;
}

export interface ResponsibilityMatrix {
  role: RoleType;
  informsPatient: string[];
  booksAppointments: string[];
  followsReferral: boolean;
  requestsPermit: boolean;
  coordinatesWithOPC: boolean;
  coordinatesInpatient: boolean;
  documentationResponsibility: string;
}
