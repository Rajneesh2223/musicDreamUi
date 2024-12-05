import { Music } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center gap-2 px-6 py-4">
      <Music className="h-6 w-6 text-red-500" />
      <span className="text-xl font-semibold">
        <span className="text-red-500">Dream</span>
        <span className="text-white">Music</span>
      </span>
    </div>
  )
}

