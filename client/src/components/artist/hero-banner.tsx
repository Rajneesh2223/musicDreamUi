import { Badge } from "@/components/ui/badge"
import { VerifiedIcon } from 'lucide-react'

interface HeroBannerProps {
  name: string
  monthlyListeners: number
  imageUrl: string
}

export function HeroBanner({ name, monthlyListeners, imageUrl }: HeroBannerProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden h-[300px] mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-8 left-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
            <VerifiedIcon className="h-3 w-3 mr-1" />
            Verified Artist
          </Badge>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">{name}</h1>
        <p className="text-gray-300">{monthlyListeners.toLocaleString()} monthly listeners</p>
      </div>
    </div>
  )
}

