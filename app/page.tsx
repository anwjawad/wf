import { Activity, Users, MapPin, Network, Clock, ShieldAlert } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { workflows } from "@/data/workflows"
import { roles } from "@/data/roles"

export default function Dashboard() {
  const totalPathways = workflows.length;
  const totalRoles = roles.length;
  
  // Calculate total steps across all workflows
  const totalSteps = workflows.reduce((acc, wf) => acc + wf.steps.length, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Coordination Dashboard</h1>
        <p className="text-muted-foreground mt-1 text-sm">Overview of oncology patient pathways and responsibilities.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-medical-blue/5 border-medical-blue/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-medical-blue">Total Pathways</CardTitle>
            <Network className="h-4 w-4 text-medical-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">{totalPathways}</div>
            <p className="text-xs text-medical-blue/80 mt-1">Active workflows</p>
          </CardContent>
        </Card>
        
        <Card className="bg-medical-purple/5 border-medical-purple/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-medical-purple">Roles & Depts</CardTitle>
            <Users className="h-4 w-4 text-medical-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">{totalRoles}</div>
            <p className="text-xs text-medical-purple/80 mt-1">Coordinating entities</p>
          </CardContent>
        </Card>

        <Card className="bg-medical-teal/5 border-medical-teal/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-medical-teal">Process Steps</CardTitle>
            <Activity className="h-4 w-4 text-medical-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">{totalSteps}</div>
            <p className="text-xs text-medical-teal/80 mt-1">Total mapped actions</p>
          </CardContent>
        </Card>

        <Card className="bg-medical-orange/5 border-medical-orange/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-medical-orange">Pending Permits</CardTitle>
            <Clock className="h-4 w-4 text-medical-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">12</div>
            <p className="text-xs text-medical-orange/80 mt-1">Require follow-up (Demo)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
            <CardDescription>Navigate to common coordination tasks.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Link href="/master-workflow">
              <Button variant="outline" className="w-full justify-start h-12">
                <Network className="mr-3 h-5 w-5 text-medical-blue" />
                View Master Pathway
              </Button>
            </Link>
            <Link href="/matrix">
              <Button variant="outline" className="w-full justify-start h-12">
                <ShieldAlert className="mr-3 h-5 w-5 text-medical-teal" />
                Who Informs the Patient? (Matrix)
              </Button>
            </Link>
            <Link href="/pathways/radiotherapy">
              <Button variant="outline" className="w-full justify-start h-12">
                <MapPin className="mr-3 h-5 w-5 text-medical-purple" />
                Radiotherapy Coordination
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Workflow Updates</CardTitle>
            <CardDescription>Latest changes to coordination SOPs.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 bg-medical-green rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Permit Department Workflow Updated</p>
                  <p className="text-xs text-muted-foreground">Added new rejection notification step.</p>
                </div>
                <span className="text-xs text-muted-foreground">2 days ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 bg-medical-blue rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Inpatient Oncology Integration</p>
                  <p className="text-xs text-muted-foreground">Clarified transport responsibilities.</p>
                </div>
                <span className="text-xs text-muted-foreground">1 week ago</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 bg-medical-orange rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Chemo Booking Protocol</p>
                  <p className="text-xs text-muted-foreground">Revised OPC confirmation step.</p>
                </div>
                <span className="text-xs text-muted-foreground">2 weeks ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
