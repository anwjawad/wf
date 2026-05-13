import { responsibilityMatrix } from "@/data/responsibilityMatrix"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export default function MatrixPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Patient Notification & Responsibility Matrix</h1>
        <p className="text-muted-foreground mt-1 text-sm">Clear delineation of who informs the patient and coordinates each step.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coordination Responsibilities</CardTitle>
          <CardDescription>Cross-functional matrix of coordination duties per role.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="w-[250px]">Role</TableHead>
                <TableHead>Informs Patient Of...</TableHead>
                <TableHead>Books Appointments For...</TableHead>
                <TableHead className="text-center">Follows Referral</TableHead>
                <TableHead className="text-center">Requests Permit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {responsibilityMatrix.map((matrix) => (
                <TableRow key={matrix.role}>
                  <TableCell className="font-medium text-slate-900">{matrix.role}</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                      {matrix.informsPatient.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                      {matrix.informsPatient.length === 0 && <span className="text-slate-300 italic">None</span>}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                      {matrix.booksAppointments.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                      {matrix.booksAppointments.length === 0 && <span className="text-slate-300 italic">None</span>}
                    </ul>
                  </TableCell>
                  <TableCell className="text-center">
                    {matrix.followsReferral ? <Check className="h-4 w-4 mx-auto text-medical-green" /> : <X className="h-4 w-4 mx-auto text-slate-300" />}
                  </TableCell>
                  <TableCell className="text-center">
                    {matrix.requestsPermit ? <Check className="h-4 w-4 mx-auto text-medical-green" /> : <X className="h-4 w-4 mx-auto text-slate-300" />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
