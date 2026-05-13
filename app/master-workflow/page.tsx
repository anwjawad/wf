import { workflows } from "@/data/workflows"
import { WorkflowDiagram } from "@/components/workflow/WorkflowDiagram"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MasterWorkflowPage() {
  const masterWorkflow = workflows.find(w => w.id === 'master');

  if (!masterWorkflow) return <div>Workflow not found</div>;

  return (
    <div className="space-y-6 flex flex-col h-full">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{masterWorkflow.title}</h1>
          <Badge variant="blue" className="text-sm">{masterWorkflow.patientType} Patients</Badge>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">{masterWorkflow.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-1 border-slate-200 shadow-sm">
          <CardHeader className="bg-slate-50 border-b pb-4">
            <CardTitle className="text-lg text-slate-800">Workflow Details</CardTitle>
            <CardDescription>{masterWorkflow.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Coordinators</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue">General Oncology Coordinator</Badge>
                <Badge variant="teal">Radiotherapy Coordinator</Badge>
                <Badge variant="purple">Breast Cancer Coordinator</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Related Roles</h4>
              <div className="flex flex-wrap gap-2">
                {masterWorkflow.relatedRoles.map(role => (
                  <Badge key={role} variant="outline">{role}</Badge>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-xs text-slate-500">
                <strong>Note:</strong> This visualizer represents standard operating procedures. Exceptions may occur based on clinical urgency.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="col-span-2">
          <WorkflowDiagram workflow={masterWorkflow} />
        </div>
      </div>
    </div>
  )
}
