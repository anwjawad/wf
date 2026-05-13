import { roles } from "@/data/roles"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

export default function RolesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Roles & Responsibilities</h1>
        <p className="text-muted-foreground mt-1 text-sm">Detailed directory of all coordinating entities in the Oncology workflow.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.id} className="relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className={`absolute top-0 left-0 w-1 h-full bg-${role.color}`} />
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg leading-tight">{role.name}</CardTitle>
                <Users className={`h-5 w-5 text-${role.color}/70`} />
              </div>
              <CardDescription className="text-xs">{role.department}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">{role.description}</p>
              
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Key Responsibilities</h4>
                <ul className="list-disc pl-4 space-y-1">
                  {role.responsibilities.map((resp, i) => (
                    <li key={i} className="text-xs text-slate-600">{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Related Pathways</h4>
                <div className="flex flex-wrap gap-1.5">
                  {role.relatedPathways.map(path => (
                    <Badge key={path} variant="secondary" className="text-[10px]">{path}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
