import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ArtistInfo from './components/ArtistInfo';
import SongTable from './components/SongTable';
import NowPlaying from './components/NowPlaying';

function App() {
  const [selectedSong, setSelectedSong] = useState({
    title: '',
    artist: '',
    audio: '',
  });

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-row flex-1 p-6">
          <div className="flex-1 pr-6">
            <ArtistInfo />
            <SongTable onSongSelect={setSelectedSong} />
          </div>
          <NowPlaying selectedSong={selectedSong} />
        </div>
      </div>
    </div>
  );
}

export default App;