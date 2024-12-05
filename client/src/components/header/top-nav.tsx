import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

const navItems = ["Music", "Podcast", "Live", "Radio"]

export function TopNav() {
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <nav className="flex gap-8">
        {navItems.map((item) => (
          <Button
            key={item}
            variant="ghost"
            className={`text-sm ${item === "Music" ? "text-white" : "text-gray-400"}`}
          >
            {item}
          </Button>
        ))}
      </nav>
      <Button variant="ghost" size="icon">
        <Search className="h-5 w-5 text-gray-400" />
      </Button>
    </div>
  )
}

