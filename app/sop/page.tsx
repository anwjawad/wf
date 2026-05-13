import { workflows } from "@/data/workflows"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SOPPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Standard Operating Procedures</h1>
        <p className="text-muted-foreground mt-1 text-sm">Auto-generated documentation based on current pathway data.</p>
      </div>

      <Card className="print:shadow-none print:border-none">
        <CardHeader>
          <CardTitle>Overview & Scope</CardTitle>
          <CardDescription>Oncology Coordination Protocol</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm prose-slate max-w-none">
          <p>This document outlines the standard operating procedures for patient coordination across the oncology departments. It is intended for internal hospital use and staff training.</p>
          
          <div className="mt-8 space-y-12">
            {workflows.map((workflow, index) => (
              <div key={workflow.id} className="border-t pt-8">
                <h2 className="text-xl font-bold text-slate-800 mb-2">{index + 1}. {workflow.title}</h2>
                <p className="text-slate-600 mb-4">{workflow.description}</p>
                
                <h3 className="text-md font-semibold text-slate-700 mt-6 mb-3">Target Patient Group</h3>
                <p>{workflow.patientType} Patients managed by {workflow.coordinatorRole}</p>

                <h3 className="text-md font-semibold text-slate-700 mt-6 mb-3">Step-by-Step Procedure</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  {workflow.steps.map((step) => (
                    <li key={step.id}>
                      <strong>{step.title}:</strong> {step.description}
                      <div className="text-xs text-slate-500 mt-1">
                        <em>Responsible:</em> {step.responsibleRole as string} ({step.department})
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
