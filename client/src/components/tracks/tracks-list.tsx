"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PlayCircle } from 'lucide-react'

interface Track {
  id: number
  title: string
  playing: number
  duration: string
  album: string
  imageUrl: string
}

interface TrackListProps {
  tracks: Track[]
  onTrackSelect: (track: Track) => void
}

export function TrackList({ tracks, onTrackSelect }: TrackListProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Popular</h2>
        <Button variant="link" className="text-gray-400 hover:text-white">
          See All
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>TITLE</TableHead>
            <TableHead>PLAYING</TableHead>
            <TableHead>TIME</TableHead>
            <TableHead>ALBUM</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tracks.map((track) => (
            <TableRow
              key={track.id}
              className="group hover:bg-white/5 cursor-pointer"
              onClick={() => onTrackSelect(track)}
            >
              <TableCell>{track.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img src={track.imageUrl} alt={track.title} className="w-10 h-10 rounded" />
                  <span>{track.title}</span>
                </div>
              </TableCell>
              <TableCell>{track.playing.toLocaleString()}</TableCell>
              <TableCell>{track.duration}</TableCell>
              <TableCell>{track.album}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

