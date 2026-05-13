import { Workflow } from '../types';

export const workflows: Workflow[] = [
  {
    id: 'master',
    title: 'Master Oncology Coordination Pathway',
    subtitle: 'High-level patient journey from entry to treatment',
    patientType: 'Both',
    coordinatorRole: 'General Oncology Coordinator',
    description: 'The main decision tree for all oncology patients entering the system.',
    decisionPoints: 3,
    relatedRoles: ['Medical Secretary', 'Permit Department', 'Inpatient Oncology Coordinator'],
    color: 'medical-blue',
    steps: [
      { id: 'start1', title: 'Patient Entry', description: 'Patient arrives via Clinics, MDT, Emails, or Inpatient.', responsibleRole: 'Patient', department: 'External', type: 'start', nextSteps: ['dec1'] },
      { id: 'dec1', title: 'Patient Type?', description: 'Is the patient Outpatient or Inpatient?', responsibleRole: 'Medical Secretary', department: 'Intake', type: 'decision', yesStep: 'out1', noStep: 'inp1', notes: 'Yes = Outpatient, No = Inpatient' },
      
      // Inpatient branch
      { id: 'inp1', title: 'MS Contacts Inpatient Coordinator', description: 'Medical Secretary informs Inpatient Coordinator', responsibleRole: 'Medical Secretary', department: 'Outpatient Clinics', type: 'action', nextSteps: ['inp2'] },
      { id: 'inp2', title: 'Inform Patient/Ward', description: 'Coordinator informs patient and ward', responsibleRole: 'Inpatient Oncology Coordinator', department: 'Inpatient Ward', type: 'notification', nextSteps: ['inp3'] },
      { id: 'inp3', title: 'Internal Coordination', description: 'Transport and internal logistics', responsibleRole: 'Inpatient Oncology Coordinator', department: 'Logistics', type: 'action', nextSteps: ['treat1'] },
      
      // Outpatient branch
      { id: 'out1', title: 'MS Gives Appointment', description: 'Clinic appointment provided', responsibleRole: 'Medical Secretary', department: 'Outpatient Clinics', type: 'appointment', nextSteps: ['out2'] },
      { id: 'out2', title: 'Patient Attends Clinic', description: 'Shows referral', responsibleRole: 'Patient', department: 'Clinic', type: 'action', nextSteps: ['dec2'] },
      { id: 'dec2', title: 'Referral Available?', description: 'Is a valid referral present?', responsibleRole: 'Medical Secretary', department: 'Clinic', type: 'decision', yesStep: 'out4', noStep: 'dec3' },
      
      // No referral
      { id: 'dec3', title: 'Reached Coordinator?', description: 'Did patient reach coordinator?', responsibleRole: 'Patient', department: 'Clinic', type: 'decision', yesStep: 'out3a', noStep: 'out3b' },
      { id: 'out3a', title: 'Coordinator Follows Up', description: 'Follows up until referral issued', responsibleRole: 'General Oncology Coordinator', department: 'Coordination', type: 'action', nextSteps: ['out4'] },
      { id: 'out3b', title: 'Patient Follows Up', description: 'Patient gets referral then contacts coordinator', responsibleRole: 'Patient', department: 'External', type: 'action', nextSteps: ['out4'] },
      
      // Referral Available
      { id: 'out4', title: 'Assign Coordinator', description: 'Assign RT, Breast, or General Coordinator', responsibleRole: 'General Oncology Coordinator', department: 'Coordination', type: 'action', nextSteps: ['dec4'] },
      { id: 'dec4', title: 'Need Permit?', description: 'Is a financial permit required?', responsibleRole: 'General Oncology Coordinator', department: 'Coordination', type: 'decision', yesStep: 'perm1', noStep: 'treat1' },
      
      { id: 'perm1', title: 'Request Permit', description: 'Send request to Permit Dept', responsibleRole: 'General Oncology Coordinator', department: 'Coordination', type: 'permit', nextSteps: ['dec5'] },
      { id: 'dec5', title: 'Permit Approved?', description: 'Permit Dept decision', responsibleRole: 'Permit Department', department: 'Administration', type: 'decision', yesStep: 'treat1', noStep: 'perm2' },
      { id: 'perm2', title: 'Inform Patient of Rejection', description: 'Explain reason and return to MS/Coordinator', responsibleRole: 'Permit Department', department: 'Administration', type: 'notification', nextSteps: ['out3a'] },
      
      { id: 'treat1', title: 'Continue to Treatment', description: 'Proceed to specific pathway (RT, Chemo, Surgery)', responsibleRole: 'Physician', department: 'Treatment', type: 'end' }
    ]
  },
  {
    id: 'radiotherapy',
    title: 'Radiotherapy Coordinator Pathway',
    subtitle: 'Specialized workflow for radiation oncology patients',
    patientType: 'Outpatient',
    coordinatorRole: 'Radiotherapy Coordinator',
    description: 'Detailed steps from RT referral to simulation and treatment.',
    decisionPoints: 2,
    relatedRoles: ['Medical Secretary', 'Chemotherapy / OPC'],
    color: 'medical-teal',
    steps: [
      { id: 'rt1', title: 'MS Gives RT Appointment', description: 'Appointment for Radiation Oncology Clinic', responsibleRole: 'Medical Secretary', department: 'Outpatient Clinics', type: 'start', nextSteps: ['rt2'] },
      { id: 'rt2', title: 'Patient Attends Clinic', description: 'Patient shows RT referral', responsibleRole: 'Patient', department: 'Radiation Oncology', type: 'action', nextSteps: ['dec1'] },
      { id: 'dec1', title: 'Referral Available?', description: 'Is a valid referral present?', responsibleRole: 'Medical Secretary', department: 'Clinic', type: 'decision', yesStep: 'rt4', noStep: 'dec2' },
      
      { id: 'dec2', title: 'Reached RT Coordinator?', description: 'Did patient reach RT coordinator?', responsibleRole: 'Patient', department: 'Clinic', type: 'decision', yesStep: 'rt3a', noStep: 'rt3b' },
      { id: 'rt3a', title: 'RT Coordinator Follows Up', description: 'Follows up until referral issued', responsibleRole: 'Radiotherapy Coordinator', department: 'Coordination', type: 'action', nextSteps: ['rt4'] },
      { id: 'rt3b', title: 'Patient Follows Up', description: 'Patient gets referral then contacts RT coordinator', responsibleRole: 'Patient', department: 'External', type: 'action', nextSteps: ['rt4'] },
      
      { id: 'rt4', title: 'Review Case & Arrange Services', description: 'Arrange CT, PET, Chemo, Permits', responsibleRole: 'Radiotherapy Coordinator', department: 'Coordination', type: 'action', nextSteps: ['rt5'] },
      { id: 'rt5', title: 'Inform Patient', description: 'Inform of booked appointments', responsibleRole: 'Radiotherapy Coordinator', department: 'Coordination', type: 'notification', nextSteps: ['rt6'] },
      
      { id: 'rt6', title: 'Presimulation Meeting', description: 'Collect patients into Presim list and send to MS', responsibleRole: 'Radiotherapy Coordinator', department: 'Coordination', type: 'action', nextSteps: ['rt7'] },
      { id: 'rt7', title: 'MS Informs Patient', description: 'Inform of Simulation Appointment', responsibleRole: 'Medical Secretary', department: 'Outpatient Clinics', type: 'notification', nextSteps: ['rt8'] },
      { id: 'rt8', title: 'Simulation Completed', description: 'Patient undergoes simulation', responsibleRole: 'Patient', department: 'Radiation Oncology', type: 'action', nextSteps: ['dec3'] },
      
      { id: 'dec3', title: 'Concomitant Chemo?', description: 'Need concomitant chemoradiotherapy?', responsibleRole: 'Physician', department: 'Radiation Oncology', type: 'decision', yesStep: 'rt9', noStep: 'rt10' },
      { id: 'rt9', title: 'Book Chemo Appointment', description: 'RT Coordinator books with OPC', responsibleRole: 'Radiotherapy Coordinator', department: 'Coordination', type: 'appointment', nextSteps: ['rt10'] },
      { id: 'rt10', title: 'RT Treatment', description: 'Continue radiotherapy treatment', responsibleRole: 'Physician', department: 'Radiation Oncology', type: 'end' }
    ]
  }
];
