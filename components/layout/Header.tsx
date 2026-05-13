"use bench"

import { Search, Bell, UserCircle } from "lucide-react"

export function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm z-10">
      <div className="flex-1 flex items-center">
        <div className="relative w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search workflows, roles, or policies..." 
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-medical-blue focus:border-medical-blue sm:text-sm transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-500 transition-colors rounded-full hover:bg-slate-100">
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-medical-red ring-2 ring-white" />
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
          <div className="text-sm font-medium text-slate-700">Dr. Sarah Admin</div>
          <UserCircle className="h-8 w-8 text-slate-400" />
        </div>
      </div>
    </header>
  )
}
