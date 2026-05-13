"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, LayoutDashboard, GitMerge, Users, FileText, Settings, HeartPulse, Network } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Master Workflow", href: "/master-workflow", icon: Network },
  { name: "General Oncology", href: "/pathways/general", icon: Activity },
  { name: "Radiotherapy", href: "/pathways/radiotherapy", icon: HeartPulse },
  { name: "Breast Cancer", href: "/pathways/breast-cancer", icon: Activity },
  { name: "Responsibility Matrix", href: "/matrix", icon: GitMerge },
  { name: "Roles & Guidelines", href: "/roles", icon: Users },
  { name: "SOP Documentation", href: "/sop", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r h-full flex flex-col shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-2 text-medical-blue font-bold text-xl tracking-tight">
          <Activity className="h-6 w-6" />
          <span>OncoFlow</span>
        </div>
        <p className="text-xs text-slate-500 mt-1">Coordination & Responsibilities</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
          const Icon = item.icon
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-medical-blue/10 text-medical-blue" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        })}
      </div>
      
      <div className="p-4 border-t text-xs text-slate-400 text-center">
        Hospital Internal Use Only
      </div>
    </div>
  )
}
