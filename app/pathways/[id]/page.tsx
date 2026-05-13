import { workflows } from "@/data/workflows"
import { WorkflowDiagram } from "@/components/workflow/WorkflowDiagram"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function generateStaticParams() {
  return workflows.map((workflow) => ({
    id: workflow.id,
  }))
}

export default function PathwayPage({ params }: { params: { id: string } }) {
  const workflow = workflows.find(w => w.id === params.id);

  if (!workflow) {
    return (
      <div className="p-12 text-center text-slate-500">
        <h2 className="text-2xl font-bold mb-2">Pathway Not Found</h2>
        <p>The requested workflow pathway is not implemented in this demo.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{workflow.title}</h1>
          <Badge variant={workflow.id === 'radiotherapy' ? 'teal' : 'blue'} className="text-sm">
            {workflow.coordinatorRole}
          </Badge>
        </div>
        <p className="text-muted-foreground mt-1 text-sm">{workflow.subtitle}</p>
      </div>

      <WorkflowDiagram workflow={workflow} />

      <Card>
        <CardHeader>
          <CardTitle>Step-by-Step Instructions</CardTitle>
          <CardDescription>Detailed tabular view of the {workflow.title} process.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="w-[200px]">Step</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Responsible Role</TableHead>
                <TableHead>Department</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workflow.steps.map((step) => (
                <TableRow key={step.id}>
                  <TableCell className="font-medium">{step.title}</TableCell>
                  <TableCell className="text-muted-foreground">{step.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{step.responsibleRole as string}</Badge>
                  </TableCell>
                  <TableCell>{step.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
