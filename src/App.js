import Players from './components/Players';
import './index.css';
import { useEffect, useState } from 'react';

function App() {
  const [songs] = useState([
    {
      title: 'Terminator',
      artist: 'Asake',
      img_src: './images/Asake-term.webp',
      src: './music/Asake_-_Terminator.mp3',
    },
    {
      title: 'Tunez-ft-wizkid',
      artist: 'Wizkid',
      img_src: './images/wizkid.jpg',
      src: './music/DJ-Tunez-Ft-Wizkid-Cool-Me-Down.mp3',
    },
    {
      title: 'Emi-Lo-kan',
      artist: 'Qdot',
      img_src: './images/download-mp3-qdot.webp',
      src: './music/DJ_OP_Dot_ft_Qdot_-_Gbemidebe.mp3'
    },
    {
      title: 'Potable-ft-St..',
      artist: 'Potable',
      img_src: './images/potable image.jpg',
      src: './music/Portable-Ft-Steven-Adeoye-and-T.I-Blaze-Ali-Remix-(TrendyBeatz.com).mp3'
    },
    {
      title: 'gbemidebe',
      artist: 'Qdot',
      img_src: './images/download-mp3-qdot.webp',
      src: './music/DJ_OP_Dot_ft_Qdot_-_Gbemidebe.mp3'
    },
    {
      title: 'Dj-Selex',
      artist: 'Burna-boy',
      img_src: './images/Burna-Boy.webp',
      src: './music/Dj-Selex-Burna-Boy-(TrendyBeatz.com).mp3'
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] =
    useState(0);
  const [nextSongIndex, setNextSongIndex] =
    useState(0)

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }

    })
  }, [currentSongIndex, songs.length])

  return (
    <div className='App'>
      <Players
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

    </div>
  );
}

export default App;


