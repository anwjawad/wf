import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { FileText, MapPin, Activity, HelpCircle, Calendar, Users, Stethoscope, AlertCircle } from 'lucide-react';
import { WorkflowStep } from '@/types';
import { Badge } from '@/components/ui/badge';

interface WorkflowNodeProps {
  data: {
    step: WorkflowStep;
    colorClass: string;
  };
  isConnectable: boolean;
}

export function WorkflowNode({ data, isConnectable }: WorkflowNodeProps) {
  const { step, colorClass } = data;

  const getIcon = () => {
    switch (step.type) {
      case 'start': return <Users className="h-5 w-5" />;
      case 'action': return <Activity className="h-5 w-5" />;
      case 'decision': return <HelpCircle className="h-5 w-5 text-medical-orange" />;
      case 'notification': return <AlertCircle className="h-5 w-5 text-medical-teal" />;
      case 'permit': return <FileText className="h-5 w-5 text-medical-green" />;
      case 'appointment': return <Calendar className="h-5 w-5" />;
      case 'treatment': return <Stethoscope className="h-5 w-5 text-medical-blue" />;
      case 'end': return <MapPin className="h-5 w-5" />;
      default: return <Activity className="h-5 w-5" />;
    }
  };

  const getBadgeVariant = (roleName: string) => {
    if (roleName.includes('Medical Secretary')) return 'blue';
    if (roleName.includes('Radiotherapy')) return 'teal';
    if (roleName.includes('Breast')) return 'purple';
    if (roleName.includes('Permit')) return 'green';
    if (roleName.includes('Chemo')) return 'orange';
    return 'outline';
  };

  return (
    <div className={`w-[280px] p-4 bg-white rounded-xl shadow-sm border-2 ${colorClass} transition-shadow hover:shadow-md`}>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-slate-400" />
      
      <div className="flex items-start gap-3">
        <div className="mt-1 flex-shrink-0 text-slate-600 bg-slate-50 p-2 rounded-lg">
          {getIcon()}
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800 leading-tight">{step.title}</h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{step.description}</p>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Role</span>
          <Badge variant={getBadgeVariant(step.responsibleRole as string)} className="text-[10px] px-1.5 py-0">
            {step.responsibleRole as string}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold">Dept</span>
          <span className="text-[10px] font-medium text-slate-600">{step.department}</span>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="w-3 h-3 bg-slate-400" />
    </div>
  );
}
