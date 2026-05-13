import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
        <p className="text-muted-foreground mt-1 text-sm">Manage application preferences and data.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Management (Placeholder)</CardTitle>
          <CardDescription>In the future, you will be able to edit roles, workflows, and responsibilities here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg bg-slate-50 flex items-center justify-between">
            <div>
              <h4 className="font-medium text-sm">Edit Workflows</h4>
              <p className="text-xs text-muted-foreground mt-1">Modify step sequences and decision logic.</p>
            </div>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>
          <div className="p-4 border rounded-lg bg-slate-50 flex items-center justify-between">
            <div>
              <h4 className="font-medium text-sm">Manage Roles</h4>
              <p className="text-xs text-muted-foreground mt-1">Update role descriptions and matrix.</p>
            </div>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
