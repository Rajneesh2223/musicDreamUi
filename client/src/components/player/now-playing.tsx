"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat } from 'lucide-react'
import { useState } from "react"

interface NowPlayingProps {
  track: {
    title: string
    artist: string
    imageUrl: string
    duration: string
  }
}

export function NowPlaying({ track }: NowPlayingProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  return (
    <div className="fixed bottom-8 right-8 w-80 bg-red-950/90 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">
        <img src={track.imageUrl} alt={track.title} className="w-16 h-16 rounded" />
        <div>
          <h3 className="font-semibold text-white">{track.title}</h3>
          <p className="text-sm text-gray-400">{track.artist}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <Slider
          value={[progress]}
          max={100}
          step={1}
          className="w-full"
          onValueChange={([value]) => setProgress(value)}
        />
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-red-500/10 hover:bg-red-500/20"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Repeat className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

