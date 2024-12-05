import Link from "next/link"
import { type LucideIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

interface NavItemProps {
  icon: LucideIcon
  label: string
  href: string
  isActive?: boolean
}

export function NavItem({ icon: Icon, label, href, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 px-6 py-3 text-sm text-gray-400 hover:text-white transition-colors",
        isActive && "text-white bg-red-500/10"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  )
}

