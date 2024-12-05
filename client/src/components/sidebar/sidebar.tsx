import { Home, TrendingUp, Library, Compass, Settings, LogOut } from 'lucide-react'
import { Logo } from "./logo"
import { NavItem } from "./nav-item"

export function Sidebar() {
  return (
    <div className="w-64 bg-black/95 h-screen flex flex-col">
      <Logo />
      
      <div className="px-3 py-2">
        <p className="px-4 text-xs font-semibold text-gray-500 mb-2">MENU</p>
        <nav className="space-y-1">
          <NavItem icon={Home} label="Home" href="/" isActive />
          <NavItem icon={TrendingUp} label="Trends" href="/trends" />
          <NavItem icon={Library} label="Library" href="/library" />
          <NavItem icon={Compass} label="Discover" href="/discover" />
        </nav>
      </div>

      <div className="mt-auto px-3 py-2">
        <p className="px-4 text-xs font-semibold text-gray-500 mb-2">GENERAL</p>
        <nav className="space-y-1">
          <NavItem icon={Settings} label="Settings" href="/settings" />
          <NavItem icon={LogOut} label="Log Out" href="/logout" />
        </nav>
      </div>
    </div>
  )
}

